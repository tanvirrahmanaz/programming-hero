import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.init'; // Import the auth instance

const AuthProvider = ({children}) => {

    const createUser = (email,password) => {
        // Function to create a new user
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signIn = (email, password) => {
        // Function to sign in an existing user
        return signInWithEmailAndPassword(auth, email, password);
    };

    const authInfo = {
        createUser,
        signIn,

    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;