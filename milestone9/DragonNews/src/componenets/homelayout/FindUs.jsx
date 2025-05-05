import React from 'react';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-center mb-4 mt-4">Find Us On</h2>

            <div className="join join-vertical w-full">
                <button className="btn bg-base-100 justify-start"><FaFacebook></FaFacebook> Facebook</button>
                <button className="btn bg-base-100 justify-start"><BsTwitter></BsTwitter> Twitter</button>
                <button className="btn bg-base-100 justify-start"><BsInstagram></BsInstagram> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;