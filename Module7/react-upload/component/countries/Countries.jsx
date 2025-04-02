import React, { useState } from 'react';
import {use} from 'react'
import Country from '../country/Country';
import './Countried.css'



const Countries = ({dataPromise}) => {
    const [visitedCountries, setVisitedCountires] = useState([])

    const countries = use(dataPromise);
    
    const handlevisitedCountires = (country) => {
        console.log('country visited click to be added',country.name.common);
    }
    return (
        <div>
           <h1>Travelling Countires {countries.length}</h1> 
           <h3>Traveled so far: </h3>
           <div  className='countries'>
                {
                countries.map(countryData => 
                    <Country 
                    key={countryData.cca3} 
                    country={countryData} 
                    handleVisitedCountires={handlevisitedCountires}
                    />
                )
                }
           </div>
        </div>
    );
};

export default Countries;