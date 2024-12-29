import { createBrowserRouter } from "react-router-dom";

import Main from "../Root/Main";
import HomePage from "../HomePage/HomePage";
import SignUp from "../Authentication/Sign-up/SignUp";
import SignIn from "../Authentication/SignIn/SignIn";

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
   },
   {
    path:'/signUp',
    element:<SignUp/>
   },
   {
    path:'/signIn',
    element:<SignIn/>
   }
])

 export default router