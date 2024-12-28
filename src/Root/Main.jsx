import { Outlet } from "react-router-dom";


const Main = () => {
    
    return (
        <div className="font-inter mx-12">
            
            <Outlet/>
            
        </div>
    );
};

export default Main;