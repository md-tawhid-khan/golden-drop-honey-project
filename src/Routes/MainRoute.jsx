import { createBrowserRouter } from "react-router-dom";

import Main from "../Root/Main";
import HomePage from "../HomePage/HomePage";

 const router=createBrowserRouter([
   {
    path:'/',
    element:<Main/>,
    children:[
        {
            index:true,
            element:<HomePage/>
        }
    ]
   }
])

 export default router