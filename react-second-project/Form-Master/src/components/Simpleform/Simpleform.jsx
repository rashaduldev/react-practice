const Simpleform = () => {

    const Handlesubmit=e=>{
        e.preventDefault();
        console.log('Submitted');
    }
    return (
        <div>
            <form action="" onSubmit={Handlesubmit}>
                <input type="text"  placeholder='Input'/> 
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Simpleform;