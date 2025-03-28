import React from 'react';
import {use} from 'react'



const Countries = ({countriespromise}) => {

    const countries = use(countriespromise);
    console.log(countries)

    return (
        <div>
           <h1>Travelling Countires</h1> 
        </div>
    );
};

export default Countries;