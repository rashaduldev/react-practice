

const User = ({user}) => {
    const {id,name,email,phone}=user;
    return (
        <div>
          <div style={{border:'3px solid yellow' ,borderRadius:'10px',width:'auto'}}>
          <h2>Name:{name}</h2>
            <h2>Email:{email}</h2>
            <h2>Phone:{phone}</h2>
            <hr />
          </div>
        
        </div>
        
    );
};

export default User;