import React from 'react';
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome } from 'react-icons/fa';
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [cart] = useCart();
    // TODO: load data from the server to have dynamic isAdmin based on Data
    // const isAdmin = true;
    const [isAdmin] = useAdmin();

    return (
        <div className="drawer">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                {/* Navbar */}
                {/* <div className="w-full navbar bg-base-300"> */}
                {/* <div className="flex-none lg:hidden"> */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button">
                    Open drawer
                </label>
                {/* </div> */}
                {/* <div className="flex-1 px-2 mx-2">Navbar Title</div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            <li><a>Navbar Item 1</a></li>
                            <li><a>Navbar Item 2</a></li>
                        </ul>
                    </div> */}
                {/* </div> */}
                {/* Page content here */}
                {/* Content */}
            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80">

                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/home"><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/addItem"> <FaUtensils></FaUtensils> Add an Items</NavLink></li>
                            <li><NavLink to="/dashboard/manageItems"><FaWallet></FaWallet> Manage Items</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaBook></FaBook> Manage Bookings</NavLink></li>
                            <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>

                        </> : <>
                            <li><NavLink to="/dashboard/home"><FaHome></FaHome> User Home</NavLink></li>
                            <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
                            <li>
                                <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                                    <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
                                </NavLink>

                            </li>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;
