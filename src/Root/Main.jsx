import { Outlet } from "react-router-dom";
import Navbar from "../Share/Navbar/Navbar";


const Main = () => {
    return (
        <div className="mx-12">
            <Navbar></Navbar>
            <Outlet/>
            
        </div>
    );
};

export default Main;