import { use } from "react"
import Country from "../Country/Country";
import './Countries.css'

export default function Countries({countriesPromise}){
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    return(
        <div>
            <h1>Total Country : {countries.length}</h1>
           <div className="countries">
             {
                countries.map(country => <Country  key={country.cca3.cca3} country = {country}></Country>)
            }
           </div>
        </div>
    )
};