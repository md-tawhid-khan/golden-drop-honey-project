import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";


const Main = () => {
    
    return (
        <div className="font-inter mx-12">
            <Toaster/>
            <Outlet/>
            
        </div>
    );
};

export default Main;