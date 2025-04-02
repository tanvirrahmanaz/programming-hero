import React from 'react';

const Country = ({ country }) => {
    return (
        <div>
            <h2>Name: {country.name.common}</h2>
            <img src={country.flags.png} alt="" />
            <p>Independent: {country.independent ? "Free" : "Not Free"}</p>
        </div>
    );
};

export default Country;
