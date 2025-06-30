import React from 'react';
import Login from '../../pages/Authentication.jsx/Login';
import AuthImage from '../../assets/AuthImage/authImage.png'
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={AuthImage}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;