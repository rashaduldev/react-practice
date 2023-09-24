import { Outlet } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <h2>Navber: </h2>

            <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <Outlet></Outlet>
            </nav>
            
        </div>
    );
};

export default Header;