import { useEffect, useState } from "react";
import Country from "./Country";

const Countries = () => {
    const [countries, setCountries] = useState([]);

    const [visitedCountries,setvisitedCountries]=useState([]);

    const [visitedFlag,setVisitedFlag]=useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => setCountries(data))
    }, []);

    const handleVisitedCountries=(country)=>{
        console.log('please added this country');
        console.log(country);
      const newVisitedCountry=  [...visitedCountries,country]
      setvisitedCountries(newVisitedCountry);

    }

    const handleVisitedFlag=(flag)=>{
        // console.log('flag Clicked');
        const newVisitedFlag=[...visitedFlag,flag]
        setVisitedFlag(newVisitedFlag)
    }

    return (
        <div>
            <h2>Countries Length: {countries.length}</h2>
            <h4>Visited Countries:{visitedCountries.length}</h4>
            <div>
                <ul>
                {
                  visitedFlag.map(country=><li key={country.cca3}>{country.name?.common}</li>) 
                }
                </ul>
                <hr />
            </div>
            {/* Visited Flag */}
            <div>
                <h3>Visited flag: {visitedFlag.length}</h3>

                <div style={{display:'grid',gridTemplateColumns:'repeat(6,1fr)', gap:'10px',justifyContent:'center'}}>
                {
                    visitedFlag.map(flag => <img style={{width:'200px' ,height:'300px'}} src={flag}></img>)
                }
                </div>
            </div>
            <hr />

           <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)',justifyContent:'center' ,gap:'15px'}}>
           {
                countries.map(country => 
                    <Country key={country.cca3}
                    handleVisitedCountries={handleVisitedCountries}
                    handleVisitedFlag={handleVisitedFlag}
                    country={country}>

                    </Country>
                )
            }
           </div>
        </div>
    );
};

export default Countries;
