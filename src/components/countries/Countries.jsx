import { use, useState } from "react"
import Country from "../Country/Country";
import './Countries.css'

export default function Countries({countriesPromise}){
    const [VisitedCountries,setVisitedCountries] = useState([])
    const [VisitedFlag,setVisitedFlag] = useState([])
        const hanldeVisitedCountry = (country) =>{
            const newVisitedCountry = [...VisitedCountries,country];
            setVisitedCountries(newVisitedCountry);
        };
        const handleVisitedeFlag = (flag) =>{
           const newVisitedFlag = [...VisitedFlag,flag]
           setVisitedFlag(newVisitedFlag);
        }
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    return(
        <div>
            <h1>Total Country : {countries.length}</h1>
            <h3>Total Visited Country : {VisitedCountries.length}</h3>
            <h3>Visited Flag : {VisitedFlag.length}</h3>
            <ol>
                {
                    VisitedCountries.map(country => <li>{country.name.common}</li>)
                }
            </ol>
            <div className="flg-container">
                {
                    VisitedFlag.map(flag => <img src={flag}></img>)
                }
            </div>
           <div className="countries">
             {
                countries.map(country => <Country  key={country.cca3.cca3} country = {country} hanldeVisitedCountry = {hanldeVisitedCountry} handleVisitedeFlag={handleVisitedeFlag}></Country>)
            }
           </div>
        </div>
    )
};