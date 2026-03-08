import React from 'react';
import { Link } from 'react-router-dom';
import ThemeController from './ThemeController';

const Navbar = () => {

    return (
        <div className="navbar bg-base-100 shadow-sm px-4 md:px-8 max-w-7xl mx-auto">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Gym Management System
                </Link>
            </div>

            <div className="flex-none gap-4">


                <ul className="menu menu-horizontal px-1 font-semibold hidden lg:flex">
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/members">Members</Link></li>
                    <li><Link to="/members/create">Create</Link></li>
                    <li><Link to="/membership">Membership</Link></li>
                </ul>
                <ThemeController />
            </div>
        </div>
    );
};

export default Navbar;
