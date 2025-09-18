import { use, useState } from "react"
import Country from "../Country/Country";
import './Countries.css'

export default function Countries({countriesPromise}){
    const [VisitedCountries,setVisitedCountries] = useState([])
        const hanldeVisitedCountry = (country) =>{
            const newVisitedCountry = [...VisitedCountries,country];
            setVisitedCountries(newVisitedCountry);
        };
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    return(
        <div>
            <h1>Total Country : {countries.length}</h1>
            <h3>Total Visited Country : {VisitedCountries.length}</h3>
            <ol>
                {
                    VisitedCountries.map(country => <li>{country.name.common}</li>)
                }
            </ol>
           <div className="countries">
             {
                countries.map(country => <Country  key={country.cca3.cca3} country = {country} hanldeVisitedCountry = {hanldeVisitedCountry}></Country>)
            }
           </div>
        </div>
    )
};