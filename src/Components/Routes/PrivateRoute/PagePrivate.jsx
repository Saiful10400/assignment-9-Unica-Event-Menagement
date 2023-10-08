
import React, { useContext } from 'react';
import { datacontext } from '../../DataProvider';
import { Navigate } from 'react-router-dom';


const PagePrivate = ({ children }) => {
 
    const {user} =useContext(datacontext)

    if(user){
        return children
    }
    else{
      return <h1>helow saiful</h1>
    }
    
    // return (
    //     <div>
    //         {children}
    //     </div>
    // );
};

export default PagePrivate;