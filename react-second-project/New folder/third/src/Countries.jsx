import { useState } from "react";
import Country from "./Country";
import { useEffect } from "react";

const Countries = () => {
    const [countries,setCountries]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(response=>response.json())
        .then(data=>setCountries(data))
    },[])

    return (
        <div>
            <h2>Total Countries:{countries.length}</h2>
           {
            countries.map(country=><Country key={country.cca3} country={country}></Country>)
           }
        </div>
    );
};

export default Countries;