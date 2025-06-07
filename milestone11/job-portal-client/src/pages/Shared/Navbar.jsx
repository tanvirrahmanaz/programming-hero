import React from 'react';
import { NavLink } from 'react-router';
import { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';

const Navbar = () => {
    const { user, singOutUser } = use(AuthContext);
    const photoURL = user?.photoURL || 'https://via.placeholder.com/150';
    
    const handleLogOut = () => {
        singOutUser()
            .then(() => {
                console.log('User logged out successfully');
            })
            .catch(error => {
                console.error('Error logging out:', error);
            });
    }

    const links = <>
        <li>
            <NavLink 
                to="/" 
                className={({ isActive }) => 
                    `font-medium transition-colors duration-200 ${
                        isActive 
                            ? 'text-primary bg-primary/10 rounded-lg' 
                            : 'hover:text-primary hover:bg-base-200 rounded-lg'
                    }`
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink 
                to="/about" 
                className={({ isActive }) => 
                    `font-medium transition-colors duration-200 ${
                        isActive 
                            ? 'text-primary bg-primary/10 rounded-lg' 
                            : 'hover:text-primary hover:bg-base-200 rounded-lg'
                    }`
                }
            >
                About
            </NavLink>
        </li>
        <li>
            <NavLink 
                to="/services" 
                className={({ isActive }) => 
                    `font-medium transition-colors duration-200 ${
                        isActive 
                            ? 'text-primary bg-primary/10 rounded-lg' 
                            : 'hover:text-primary hover:bg-base-200 rounded-lg'
                    }`
                }
            >
                Services
            </NavLink>
        </li>
        <li>
            <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                    `font-medium transition-colors duration-200 ${
                        isActive 
                            ? 'text-primary bg-primary/10 rounded-lg' 
                            : 'hover:text-primary hover:bg-base-200 rounded-lg'
                    }`
                }
            >
                Contact
            </NavLink>
        </li>
    </>

    return (
        <div className="navbar bg-base-100/95 backdrop-blur-md shadow-lg border-b border-base-300 sticky top-0 z-50 transition-all duration-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden hover:bg-base-200 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-xl border border-base-300">
                        {links}
                    </ul>
                </div>
                <NavLink to="/" className="btn btn-ghost text-xl font-bold text-primary hover:bg-primary/10 transition-all duration-200">
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Job Portal
                    </span>
                </NavLink>
            </div>
            
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {links}
                </ul>
            </div>
            
            <div className="navbar-end gap-2">
                {user ? (
                    <div className="flex items-center gap-3">
                        {user.photoURL && (
                            <div className="avatar">
                                <div className="w-8 h-8 rounded-full ring-2 ring-primary/20">
                                    <img src={photoURL} alt="User Avatar" />
                                </div>
                            </div>
                        )}
                        <span className="text-sm font-medium text-base-content/70 hidden md:inline">
                            {user.displayName || user.email}
                        </span>
                        <button 
                            className="btn btn-outline btn-sm hover:btn-error transition-all duration-200" 
                            onClick={handleLogOut}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            LogOut
                        </button>
                    </div>
                ) : (
                    <>
                        <NavLink 
                            className="btn btn-outline btn-sm hover:btn-primary transition-all duration-200" 
                            to="/login"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                            LogIn
                        </NavLink>
                        <NavLink 
                            className="btn btn-primary btn-sm hover:btn-primary-focus transition-all duration-200" 
                            to="/register"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                            </svg>
                            Register
                        </NavLink>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;