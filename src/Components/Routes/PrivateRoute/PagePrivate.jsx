
import React, { useContext } from 'react';
import { datacontext } from '../../DataProvider';
import { Navigate } from 'react-router-dom';


const PagePrivate = ({ children }) => {
 
    const {user,loading} =useContext(datacontext)
    if(loading){
     return <div className='w-full h-screen justify-center items-center flex'><span className="loading loading-spinner loading-lg"></span></div>
    }

    else if(user){
        return children
    }
    else{
      return <Navigate to={"/login"}></Navigate>
    }
    
    // return (
    //     <div>
    //         {children}
    //     </div>
    // );
};

export default PagePrivate;