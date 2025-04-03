import React,{use} from 'react';

const Bottles = (bottlesPromise) => {
    const bottles = use(bottlesPromise);
    console.log(bottles)
    return (
        <div>
            
        </div>
    );
};

export default Bottles;