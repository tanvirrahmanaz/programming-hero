import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center w-11/12 mx-auto my-3'>
           <div></div>
           <div className='flex gap-5'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/career">Career</NavLink>
           </div>
           <div className='flex items-center gap-3'>
            <img src={user} alt="" />
            <button className='btn btn-primary px-10'>Login</button>
           </div>
        </div>
    );
};

export default Navbar;