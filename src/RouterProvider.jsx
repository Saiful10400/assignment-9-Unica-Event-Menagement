import { createBrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Routes/home/Home";
import Error from "./Components/Routes/Error";


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
        }
       ]
    }
])



export default router