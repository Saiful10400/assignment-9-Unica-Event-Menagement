import { createBrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Routes/home/Home";
import Error from "./Components/Routes/Error";
import Login from "./Components/Routes/Login/Login";
import Register from "./Components/Routes/Login/Register";
import PagePrivate from "./Components/Routes/PrivateRoute/PagePrivate";
import Page from "./Components/Routes/PrivateRoute/Page";
import BlogPrivate from "./Components/Routes/home/blog/BlogPrivate";
import Blog from "./Components/Routes/home/blog/Blog";



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
        },
        {
            path:"/blog",
            element:<BlogPrivate><Blog></Blog></BlogPrivate>
        }
       ]
    }
])



export default router