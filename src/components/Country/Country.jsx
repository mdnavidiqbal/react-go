import React from 'react';
import './Country.css'

const Country = ({country}) => {
//    console.log(country);
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name : {country.name.common}</h3>
            <p>Population : {country.population.population}</p>
            <p>cca3 : {country.cca3.cca3}</p>
        </div>
    );
};

export default Country;