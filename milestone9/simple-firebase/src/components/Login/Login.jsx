import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from '../../firebase/firebase.init';


const Login = () => {

    const provider = new GoogleAuthProvider();


    const handleLogin = () => {
        console.log('login');

        signInWithPopup(auth,provider)
        .then(result => {
            console.log(result);
        })
        .catch(error => {
        console.log(error);
    })
}

    return (
        <div>
           <h2>Login</h2> 
           <button onClick={handleLogin}>sign in with google</button>
        </div>
    );
};

export default Login;