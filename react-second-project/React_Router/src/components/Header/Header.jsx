import { Link, Outlet } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <h2>Navber: </h2>

            <nav style={{marginRight:'30px',display:'flex' ,gap:'20px'}}>
                <div>
                <Link to="/"> Home</Link>
                </div>
                <Link to="/about"> About</Link>
                <Link to="/contact"> Contact</Link>
                <Link to="/err"> Error</Link>
                
            </nav>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Header;