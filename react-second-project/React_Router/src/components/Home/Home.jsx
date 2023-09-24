import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div>
                <div>Hello from react router</div>
                <Outlet></Outlet>
        </div>
    );
};

export default Home;