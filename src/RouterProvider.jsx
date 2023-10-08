import { createBrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Routes/home/Home";
import Error from "./Components/Routes/Error";
import Login from "./Components/Routes/Login/Login";
import Register from "./Components/Routes/Login/Register";
import PagePrivate from "./Components/Routes/PrivateRoute/PagePrivate";
import Page from "./Components/Routes/PrivateRoute/Page";



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
        },
        {
            path:"/service/:id",
            loader:()=>fetch("/data.json"),
            element:<PagePrivate><Page></Page></PagePrivate>
        }
       ]
    }
])



export default router