import { use } from "react"
import Country from "../Country/Country";

export default function Countries({countriesPromise}){
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    return(
        <div>
            <h1>Total Country : {countries.length}</h1>
            {
                countries.map(country => <Country  country = {country}></Country>)
            }
        </div>
    )
};