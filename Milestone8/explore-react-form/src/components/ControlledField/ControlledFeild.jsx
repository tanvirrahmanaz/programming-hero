import React, { useState } from 'react';

const ControlledFeild = () => {
    const[password,setpassword] = useState('')
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("submitted");

    }
    const handlePassword = e =>{
        console.log(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name='email' placeholder='Email' required/><br />
                <input type="password" name='password' placeholder='password' onChange={handlePassword} defaultValue={password} required /><br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default ControlledFeild;