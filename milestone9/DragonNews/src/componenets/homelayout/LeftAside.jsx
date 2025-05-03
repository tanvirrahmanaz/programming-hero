import React, { Suspense } from 'react';
import Categories from '../Categories';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<div className='text-center'>Loading...</div>}>
                <Categories></Categories>
            </Suspense>
           
        </div>
    );
};

export default LeftAside;