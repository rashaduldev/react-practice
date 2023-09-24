const Simpleform = () => {

    const Handlesubmit=e=>{
        e.preventDefault();
        console.log('Submitted');
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);

    }
    return (
        <div>
            <form action="" onSubmit={Handlesubmit}>
                <input type="text" name="name" placeholder='Name'/> <br />
                <input type="email" name="email" placeholder='Email'/> <br />
                <input type="phone" name="phone" placeholder='phone'/> <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Simpleform;