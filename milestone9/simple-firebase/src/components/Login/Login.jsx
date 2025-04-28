import React from 'react';

const Login = () => {

    const handleLogin = () => {
        console.log('login');
    }

    return (
        <div>
           <h2>Login</h2> 
           <button onClick={handleLogin}>sign in with google</button>
        </div>
    );
};

export default Login;