import React from 'react';
import { useForm } from 'react-hook-form';

// You can add a background image or keep it simple
// import loginBg from '../assets/login-bg.png'; 

const Login = () => {
    const { 
        register,         // To register an input
        handleSubmit,     // Wraps your submit handler
        formState: { errors } // Contains form state and errors
    } = useForm();

    // This function will be called on form submission
    const onSubmit = (data) => {
        console.log('Login Data:', data);
        // Ekhane apni apnar login logic implement korben
        // For example: Firebase authentication, API call etc.
    };

    return (
        <div 
            className="hero min-h-screen bg-base-200" 
            // style={{ backgroundImage: `url(${loginBg})` }}
        >
            <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-4xl">
               
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                     <h1 className="text-5xl font-bold text-gray-800">Login now!</h1>
                    <p className="py-6 text-gray-600">
                        Welcome back! Please enter your credentials to access your account and manage your parcels seamlessly.
                    </p>
                    {/* The form is handled by handleSubmit */}
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        {/* Email Field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input 
                                type="email" 
                                placeholder="email" 
                                className={`input input-bordered ${errors.email ? 'input-error' : ''}`}
                                {...register("email", { 
                                    required: "Email is required",
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: "Entered value does not match email format"
                                    } 
                                })}
                            />
                            {/* Show error message if validation fails */}
                            {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
                        </div>

                        {/* Password Field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input 
                                type="password" 
                                placeholder="password" 
                                className={`input input-bordered ${errors.password ? 'input-error' : ''}`}
                                {...register("password", { 
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must have at least 6 characters"
                                    }
                                })}
                            />
                            {/* Show error message if validation fails */}
                            {errors.password && <span className="text-red-500 text-xs mt-1">{errors.password.message}</span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        
                        {/* Submit Button */}
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
