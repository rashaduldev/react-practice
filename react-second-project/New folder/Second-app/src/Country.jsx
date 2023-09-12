import { useState } from "react";

const Country = ({ country ,handleVisitedCountries,handleVisitedFlag }) => {
    console.log(country);
    const {name,flags,idd} = country;  
    // console.log(flags.png);  

    const [visited,setVisited]=useState(false);

    const handleVisited=()=>{
        setVisited(!visited)
    }
    // console.log(handleVisitedCountries);

    return (
        <div style={{ border: '1px solid red', margin: '20px', padding: '20px', borderRadius: '20px',width:'400px',marginLeft:'auto',marginRight:'auto', backgroundColor:visited?'purple':'gray' }}>
            <h3>Name: {name?.common}</h3>
            {/* Display the image using the flags property */}
            {/* <img src="" alt="" /> */}
           <img style={{height:'200px',width:'full'}} src={flags.png} alt="" />
            <h3>Id:{idd.root}</h3>
           <div style={{gap:'5px',display:'flex',fontSize:'14px',textAlign:'center',justifyContent:'center'}}>
           <button onClick={()=>handleVisitedFlag(country.flags.png)}>Visited Flag</button>
            <button onClick={()=>handleVisitedCountries(country)}>{visited?'Great':'Please Visited'}</button>
            <button onClick={handleVisited}  style={{border: '1px solid red', padding: '10px'}}> {visited? 'Visited':'Not Visited'}</button>
           </div>
            {
                visited ? 'I have visited This country':'I want to visit'
            }
        </div>
    );
};

export default Country;

