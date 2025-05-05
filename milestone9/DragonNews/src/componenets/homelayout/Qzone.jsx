import React from 'react';
import swimmingImage from '../../assets/swimming.png';
import classImage from '../../assets/class.png';
import playGroundImage from '../../assets/playground.png';

const Qzone = () => {
    return (
        <div className='bg-base-200'>
           <h2>Q-zone</h2>
           <div className='gap-4'>
                <img src={swimmingImage} alt="" />
                <img src={classImage} alt="" />
                <img src={playGroundImage} alt="" />
           </div>
        </div>
    );
};

export default Qzone;