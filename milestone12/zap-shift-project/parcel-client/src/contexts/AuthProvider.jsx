import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase/firebase.init'; // Import the auth instance

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email,password) => {
        setLoading(true);
        // Function to create a new user
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signIn = (email, password) => {
        setLoading(true);
        // Function to sign in an existing user
        return signInWithEmailAndPassword(auth, email, password);
    };

    const singInWithGoogle = () => {
        setLoading(true);
        // Function to sign in with Google
        return signInWithPopup(auth, googleProvider);
    };

    const logOut = () => {
        setLoading(true);
        // Function to log out the current user
        return auth.signOut();
    };

    useEffect ( () => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    })

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        singInWithGoogle, 
        logOut,

    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;