import React, { useState } from 'react';

// এটি আমাদের মূল কম্পোনেন্ট
const Dashboard = () => {
    // সাবস্ক্রাইব বাটনের জন্য state
    const [isSubscribed, setIsSubscribed] = useState(false);

    // কাউন্টারের জন্য state
    const [count, setCount] = useState(0);

    // সাবস্ক্রাইব বাটনের স্টাইল
    const buttonStyle = {
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        backgroundColor: isSubscribed ? 'grey' : '#ff0000', // isSubscribed এর উপর নির্ভর করে রঙ পরিবর্তন
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        width: '150px' // একটি নির্দিষ্ট প্রস্থ দেওয়া হলো যাতে লেখা বদলালে বাটন না নড়ে
    };

    // --- মূল পরিবর্তন এখানে ---
    // সাবস্ক্রাইব বাটনের ক্লিক হ্যান্ডলার
    const handleSubscribeClick = () => {
        // isSubscribed এর বর্তমান মানের বিপরীত মান সেট করা হচ্ছে
        // যদি true থাকে, false হবে; যদি false থাকে, true হবে
        setIsSubscribed(prevIsSubscribed => !prevIsSubscribed);
    };

    // কাউন্টার ফাংশন
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    // সেকশন স্টাইল
    const sectionStyle = {
        padding: '20px',
        margin: '20px',
        border: '1px solid #ddd',
        borderRadius: '10px',
        textAlign: 'center',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    };
    
    const counterButtonStyle = {
        margin: '0 10px',
        padding: '10px 15px',
        fontSize: '16px',
        cursor: 'pointer',
    };

    return (
        <div>
            {/* সাবস্ক্রিপশন সেকশন */}
            <div style={sectionStyle}>
                <h2>Subscription Toggle Section</h2>
                <button 
                    onClick={handleSubscribeClick} 
                    style={buttonStyle} 
                    // --- disabled={isSubscribed} লাইনটি সরিয়ে ফেলা হয়েছে ---
                >
                    {isSubscribed ? '✅ Subscribed' : 'Subscribe'}
                </button>
                {/* isSubscribed সত্য হলেই কেবল এই মেসেজটি দেখা যাবে */}
                {isSubscribed && <p style={{ marginTop: '10px' }}>Thank you for subscribing!</p>}
            </div>

            {/* কাউন্টার সেকশন (এটি অপরিবর্তিত) */}
            <div style={sectionStyle}>
                <h2>Counter Section</h2>
                <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Count: {count}</p>
                <button onClick={handleIncrement} style={counterButtonStyle}>
                    Increase (+)
                </button>
                <button onClick={handleDecrement} style={counterButtonStyle}>
                    Decrease (-)
                </button>
            </div>
        </div>
    );
};

export default Dashboard;