import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'

const Users = () => {
    const users=useLoaderData();
    return (
        <div>
                <h1>Users: {users.length}</h1>
                <h3>This is Users part</h3>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rem quam est deserunt iure ipsa!</h4>
               <div className="user">
               {
                    users.map(user=><User key={user.id} user={user}></User>)
                }
               </div>
        </div>
    );
};

export default Users;