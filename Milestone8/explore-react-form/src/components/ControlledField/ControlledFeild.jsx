import React, { useState } from 'react';

const ControlledFeild = () => {
    const[password,setPassword] = useState('')
    const[error,setError] = useState('')
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("submitted");

    }
    const handlePassword = e =>{
        console.log(e.target.value)
        setPassword(e.target.value)
        
        if(password.length < 6){
            setError("password must be bigger than six caracter")
        }
        else{
            setError('')
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name='email' placeholder='Email' required/><br />
                <input type="password" name='password' placeholder='password' onChange={handlePassword} defaultValue={password} required /><br />
                <input type="submit" value="submit" />
            </form>

            <p style={{color:'red'}}>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ControlledFeild;