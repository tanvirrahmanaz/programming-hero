import React from 'react';
import Marquee from "react-fast-marquee";

const LatestNews = () => {
    return (
        <div className='bg-base-200 p-5 rounded-lg flex items-center gap-3'>
        <p className='bg-secondary text-base-100 px-3 py-2'>Latest</p>

        <Marquee pauseOnHover={true} className=''>
             <p className='font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, modi.</p>
        </Marquee>

        
        </div>
    );
};

export default LatestNews;