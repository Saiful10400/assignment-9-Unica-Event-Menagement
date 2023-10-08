import { createBrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Routes/home/Home";
import Error from "./Components/Routes/Error";
import Login from "./Components/Routes/Login/Login";
import Register from "./Components/Routes/Login/Register";


const router=createBrowserRouter([
    {
        path:"/",
       element:<Navbar></Navbar>,
       errorElement:<Error></Error>,
       children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=>fetch("/data.json")
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        }
       ]
    }
])



export default router