const Country = ({country}) => {
    const {name,flags}=country;

    return (
        <div style={{border:'1px solid tomato' ,margin:'15px',padding:'15px',borderRadius:'20px'}}>
            <h3>Country Name:{name?.common}</h3>
            <h3>Country Flag:</h3>
            <img src={flags.png} alt="" />
            
            {/* <h3>Country City:{name?.nativeName.ara.common}</h3> */}
        </div>
    );
};

export default Country;