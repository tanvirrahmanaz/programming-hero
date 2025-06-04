import React from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import {use} from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/login.json'; // Adjust the path as necessary


const LogIn = () => {

    const {singInUser} = use(AuthContext)

    const handleLogIn= (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // Here you can add your registration logic, e.g., API call
        console.log('Email:', email, 'Password:', password);

        singInUser(email, password)
        .then(result =>{
          console.log('User singIn:', result.user);
        })
        .catch(error => {
          console.error('Error singIn user:', error);
        });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <Lottie loop={true} animationData={animationData} style={{width:"400px"}}></Lottie>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">LogIn Now</h1>
        <form onSubmit={handleLogIn} className="form-control">
          <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">LignIn</button>
        </fieldset>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default LogIn;