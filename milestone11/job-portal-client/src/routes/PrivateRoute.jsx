import React, { useContext } from 'react'; // 'use' এর পরিবর্তে 'useContext' ব্যবহার করুন
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router'; // 'react-router' থেকে নয়

const PrivateRoute = ({ children }) => {
    // 1. AuthContext থেকে user এবং loading স্টেট দুটিই নিন
    const { user, loading } = useContext(AuthContext); 
    const location = useLocation();

    // 2. লোডিং অবস্থা হ্যান্ডেল করুন
    // অথেনটিকেশন স্টেট চেক হওয়া পর্যন্ত একটি লোডিং ইন্ডিকেটর দেখান
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    // 3. যদি user লগইন করা থাকে, তাহলে তাকে সেই পেজেই যেতে দিন
    if (user && user.uid) {
        return children;
    }

    // 4. যদি user লগইন করা না থাকে, তাহলে state সঠিকভাবে পাস করুন
    // state={{ from: location }} ব্যবহার করুন, শুধু pathname নয়
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;