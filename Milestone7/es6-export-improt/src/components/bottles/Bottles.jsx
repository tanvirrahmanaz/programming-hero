import React, { use } from 'react';

const Bottles = ({ bottlesPromise }) => {
    const bottles = use(bottlesPromise);
    console.log(bottles);
    return (
        <div>
            <h2>Bottles List</h2>
            <ul>
                {bottles && bottles.map((bottle, index) => (
                    <li key={index}>{bottle.name} - ${bottle.price_usd}</li>
                ))}
            </ul>
        </div>
    );
};

export default Bottles;