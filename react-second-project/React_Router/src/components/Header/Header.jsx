import { Outlet } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <h2>Navber: </h2>

            <nav style={{gap:'10px'}}>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                
            </nav>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Header;