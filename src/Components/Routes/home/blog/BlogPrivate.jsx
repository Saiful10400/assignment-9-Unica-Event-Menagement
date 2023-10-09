import React, { useContext } from 'react';
import { datacontext } from '../../../DataProvider';
import { Navigate } from 'react-router-dom';

const BlogPrivate = ({children}) => {
    const {user,loading}=useContext(datacontext)
    // console.log(user,loading)
    if(loading){
        return <div className='w-full h-screen justify-center items-center flex'><span className="loading loading-spinner loading-lg"></span></div>

    }
    else if(user){
        return children
    }
    else{
        return <Navigate to={"/login"}></Navigate>
    }
};

export default BlogPrivate;