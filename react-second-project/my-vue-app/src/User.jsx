import './User.css'

export default function User({user}) {
    const {id,name,username,email}=user;
    return(
        <div className='user'>
               <h3>Id: {id}</h3>
            <h3>UserName:{username}</h3>
            <h2>Name:{name}</h2>
            <h3>Email:{email}</h3>
        </div>
    )
}