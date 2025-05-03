import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold mt-3'>Login With</h2>
            <div className='space-y-5 '>
                <button className='btn w-full btn-outline btn-secondary'><FcGoogle size={23}></FcGoogle>Login With Google</button>
                <button className='btn w-full btn-outline btn-primary'><FaGithub size={23}></FaGithub>Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;