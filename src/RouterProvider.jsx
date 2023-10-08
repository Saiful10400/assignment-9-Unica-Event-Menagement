import { createBrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Routes/home/Home";

const router=createBrowserRouter([
    {
        path:"/",
       element:<Navbar></Navbar>,
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