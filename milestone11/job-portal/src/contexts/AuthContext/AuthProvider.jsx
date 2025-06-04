// AuthProvider.js
import React, { useState } from 'react';
// Assuming AuthContext.js is in the same directory
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init'; // Adjust the import path as necessary

const AuthProvider = ({ children }) => {


    const [loading, setLoading] = useState(true);


    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth ,email,password);
    }





    // This is where you would put your authentication state and functions
    // For example: user, login function, logout function, etc.
    const authInfo = {
       loading,
       createUser,
    };

    return (
        // You need to use AuthContext.Provider and pass the value
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

// AuthContext.js (This file remains the same as you provided and is correct)
// import { createContext } from "react";
//
// export const AuthContext = createContext(null);
