import React, { useState } from 'react';
import './Country.css'

const Country = ({ country , handleVisitedCountires}) => {

    const [visited, setVisited] = useState(false)
    //console.log(handleVisitedCountires)

    const handleVisited = () =>{
       
    //    if(visited === true){
    //     setVisited(false)
    //    }
    //    else{
    //     setVisited(true)
    //    }

        setVisited(!visited)
        handleVisitedCountires(country)
    }

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <h2>Name: {country.name.common}</h2>
            <img src={country.flags.png} alt="" />
            <p>Independent: {country.independent ? "Free" : "Not Free"}</p>
            <button className={visited ? 'btn-visited' : 'btn-not-visited'} onClick={handleVisited}>{
                visited ? "Visited" : "No visited"
                }</button>
        </div>
    );
};

export default Country;
