import React, { useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import { use } from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/login.json';
import SocialLogin from '../Shared/SocialLogin';
import { useLocation, useNavigate } from 'react-router';
import { Eye, EyeOff, Mail, Lock, ArrowRight, User } from 'lucide-react';

const LogIn = () => {
    const { singInUser } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    
    const from = location.state?.from?.pathname || "/";
    console.log("login", from);
    
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (error) setError('');
    };

    const handleLogIn = async (event) => {
        event.preventDefault();
        setError('');
        setIsLoading(true);
        
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        if (!email || !password) {
            setError('Please fill in all fields');
            setIsLoading(false);
            return;
        }

        console.log('Email:', email, 'Password:', password);
        
        try {
            const result = await singInUser(email, password);
            console.log('User signIn:', result.user);
            navigate(from, { replace: true });
        } catch (error) {
            console.error('Error signIn user:', error);
            setError(error.message || 'Invalid email or password');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <div className="w-full max-w-7xl mx-auto">
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl lg:rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
                    <div className="flex flex-col lg:flex-row min-h-[600px]">
                        
                        {/* Left Side - Animation & Welcome */}
                        <div className="lg:w-1/2 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-6 sm:p-8 lg:p-12 flex items-center justify-center relative overflow-hidden">
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute -top-4 -left-4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl"></div>
                                <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl"></div>
                            </div>
                            
                            <div className="text-center relative z-10">
                                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto mb-6 lg:mb-8">
                                    <Lottie 
                                        animationData={animationData} 
                                        loop={true}
                                        className="w-full h-full drop-shadow-2xl"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                                        Welcome Back!
                                    </h2>
                                    <p className="text-blue-100 text-base sm:text-lg lg:text-xl leading-relaxed max-w-md mx-auto">
                                        Sign in to access your account and continue your amazing journey with us.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Login Form */}
                        <div className="lg:w-1/2 p-6 sm:p-8 lg:p-12 flex items-center">
                            <div className="w-full max-w-md mx-auto">
                                
                                {/* Header */}
                                <div className="text-center mb-8 lg:mb-10">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-6">
                                        <User className="w-8 h-8 text-white" />
                                    </div>
                                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
                                        Sign In
                                    </h1>
                                    <p className="text-gray-600 text-sm sm:text-base">
                                        Enter your credentials to access your account
                                    </p>
                                </div>

                                {/* Redirect Info */}
                                {location.state?.from && (
                                    <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                                        <p className="text-blue-700 text-sm font-medium flex items-center gap-2">
                                            <ArrowRight className="w-4 h-4" />
                                            Please sign in to continue to your destination
                                        </p>
                                    </div>
                                )}

                                {/* Error Message */}
                                {error && (
                                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl animate-pulse">
                                        <p className="text-red-600 text-sm font-medium">{error}</p>
                                    </div>
                                )}

                                {/* Login Form */}
                                <form onSubmit={handleLogIn} className="space-y-6">
                                    
                                    {/* Email Field */}
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                                            Email Address
                                        </label>
                                        <div className="relative group">
                                            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors duration-200" />
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-800 placeholder-gray-400 bg-white/50 backdrop-blur-sm hover:bg-white/80"
                                                placeholder="Enter your email address"
                                            />
                                        </div>
                                    </div>

                                    {/* Password Field */}
                                    <div className="space-y-2">
                                        <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                                            Password
                                        </label>
                                        <div className="relative group">
                                            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors duration-200" />
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                id="password"
                                                name="password"
                                                value={formData.password}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full pl-12 pr-12 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-800 placeholder-gray-400 bg-white/50 backdrop-blur-sm hover:bg-white/80"
                                                placeholder="Enter your password"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200 focus:outline-none"
                                            >
                                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Remember Me & Forgot Password */}
                                    <div className="flex items-center justify-between text-sm">
                                        <label className="flex items-center cursor-pointer group">
                                            <input
                                                type="checkbox"
                                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 transition-colors duration-200"
                                            />
                                            <span className="ml-2 text-gray-600 group-hover:text-gray-800 transition-colors duration-200">
                                                Remember me
                                            </span>
                                        </label>
                                        <a
                                            href="#"
                                            className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 hover:underline"
                                        >
                                            Forgot password?
                                        </a>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:ring-blue-300 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 relative overflow-hidden group"
                                    >
                                        {/* Button Background Animation */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        
                                        <div className="relative flex items-center gap-3">
                                            {isLoading ? (
                                                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            ) : (
                                                <>
                                                    Sign In
                                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                                </>
                                            )}
                                        </div>
                                    </button>
                                </form>

                                {/* Social Login Divider */}
                                <div className="mt-8">
                                    <div className="relative">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-gray-300"></div>
                                        </div>
                                        <div className="relative flex justify-center text-sm">
                                            <span className="px-4 bg-white text-gray-500 font-medium">
                                                Or continue with
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className="mt-6">
                                        <SocialLogin from={from} />
                                    </div>
                                </div>

                                {/* Sign Up Link */}
                                <p className="mt-8 text-center text-gray-600 text-sm sm:text-base">
                                    Don't have an account?{' '}
                                    <a
                                        href="/register"
                                        className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200 hover:underline"
                                    >
                                        Sign up now
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;