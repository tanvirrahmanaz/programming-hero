import React from 'react';
import {use} from 'react'
import Country from '../country/Country';



const Countries = ({dataPromise}) => {

    const countries = use(dataPromise);
    console.log(countries)

    return (
        <div>
           <h1>Travelling Countires {countries.length}</h1> 
           {
           countries.map(countryData => 
            <Country key={countryData.cca3} country={countryData} />
          )
           }
        </div>
    );
};

export default Countries;