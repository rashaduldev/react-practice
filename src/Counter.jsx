import { useState } from "react"

export default function Counter() {
    const [count ,setCount]=useState(0);

    const clickHandle=()=>{
        const newCount =count+1;
        setCount (newCount);
    }
    const reduceHandle=()=>{
        const newCount =count-1;
        setCount (newCount);
    }

    return(
        <div style={{border:'2px solid red',padding:'25px', borderRadius:'1rem'}}>
            <h2>Counter:{count}</h2>
         <div style={{gap:'15px',display:'flex',justifyContent:'center'}}>
         <button style={{border:'1px solid black',backgroundColor:'gray',color:'white'}} onClick={clickHandle}>Click</button>
            <button style={{border:'1px solid black',backgroundColor:'gray',color:'white'}} onClick={reduceHandle}>Reduce</button>
         </div>
        </div>
    )
}