import { useEffect, useState } from "react"

export default function Users() {
    const [users, setUsers]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    
    return(
        <div>
            <h3>Id:</h3>
            <h3>UserName:</h3>
            <h2>Name:</h2>
            <h3>Email:</h3>

        </div>
    )
}   