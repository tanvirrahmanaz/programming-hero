// AuthProvider.js
import React, { useEffect, useState } from 'react';
// Assuming AuthContext.js is in the same directory
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init'; // Adjust the import path as necessary
import { signOut } from 'firebase/auth'; // Import signOut from firebase/auth

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {


    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);


    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth ,email,password);
    }

    const singInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
       

    const singOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }
    useEffect( () =>{
        const unSubscribe = onAuthStateChanged(auth, currentuser => {
            setUser(currentuser);
            setLoading(false);
            console.log('Current user:', currentuser);
        }
        )
        return () => {
            unSubscribe();
        };
    }, [] )





    // This is where you would put your authentication state and functions
    // For example: user, login function, logout function, etc.
    const authInfo = {
       loading,
       user, 
       createUser,
       singInUser,
       signInWithGoogle,
       singOutUser,
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
