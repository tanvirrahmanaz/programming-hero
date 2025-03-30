import React from 'react';

const Country = ({ country }) => {
    console.log(country.name);
    return (
        <div>
            <h2>Name: {country.name.common}</h2>
        </div>
    );
};

export default Country;
