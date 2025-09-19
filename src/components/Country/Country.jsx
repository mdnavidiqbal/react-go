import React, {useState } from 'react';
import './Country.css'

const Country = ({country,hanldeVisitedCountry,handleVisitedeFlag}) => {
    
    const [visited,setVisited] = useState(false);

//    console.log(country);
const handleVisited = () =>{
    setVisited(visited?false:true);
    hanldeVisitedCountry(country);
    
}
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name : {country.name.common}</h3>
            <p>Population : {country.population.population}</p>
            <p>cca3 : {country.cca3.cca3}</p>
            <p>Area : {country.area.area}  {country.area.area > 300000 ? "Bigger Country ": "Smaller Country"}</p>
            <button onClick={handleVisited}>{visited ? 'Visited':'Not Visited'}</button>
            <button onClick={()=>handleVisitedeFlag(country.flags.flags.png)}>Add Visited Flag</button>
        </div>
    );
};

export default Country;