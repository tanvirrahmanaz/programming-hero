import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <nav>
             <ul>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </ul> 
        </nav>
    );
};

export default Header; 