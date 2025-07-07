import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
    const { 
        register, 
        handleSubmit, 
        watch, // To watch input values
        formState: { errors } 
    } = useForm();

    const { createUser } = useAuth(); // Assuming you have a useAuth hook to access auth functions

    // We use watch to get the value of the password field in real-time
    const password = watch("password", "");

    // This function will be called on successful form submission
    const onSubmit = (data) => {
        console.log('Registration Data:', data);
        // Ekhane apni apnar registration logic implement korben
        // For example: Firebase user creation, API call to your backend etc.

        createUser(data.email, data.password)
            .then((result) => {
                // Signed in
                const user = result.user;
                console.log('User registered successfully:', user);
                // Redirect or show success message
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Error during registration:', errorCode, errorMessage);
                // Handle error (e.g., show error message to user)
            });
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col w-full max-w-md">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-gray-800">Register Now!</h1>
                    <p className="py-6 text-gray-600">
                        Create your account to start managing your parcels with ease. It's quick and simple.
                    </p>
                </div>
                <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        {/* User Name Field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input 
                                type="text" 
                                placeholder="Your full name" 
                                className={`input input-bordered ${errors.name ? 'input-error' : ''}`}
                                {...register("name", { required: "Name is required" })}
                            />
                            {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>}
                        </div>
                        
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
                            {errors.password && <span className="text-red-500 text-xs mt-1">{errors.password.message}</span>}
                        </div>

                        {/* Confirm Password Field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input 
                                type="password" 
                                placeholder="Confirm password" 
                                className={`input input-bordered ${errors.confirmPassword ? 'input-error' : ''}`}
                                {...register("confirmPassword", { 
                                    required: "Please confirm your password",
                                    validate: value =>
                                      value === password || "The passwords do not match"
                                })}
                            />
                            {errors.confirmPassword && <span className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</span>}
                        </div>
                        
                        {/* Submit Button */}
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;



