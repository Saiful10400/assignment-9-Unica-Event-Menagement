
import React, { useContext } from 'react';
import { datacontext } from '../../DataProvider';

const PagePrivate = ({ children }) => {
    
    const {user} =useContext(datacontext)

    if(user){
        return children
    }
    else{
        return <h1>hellow</h1>
    }
    
    // return (
    //     <div>
    //         {children}
    //     </div>
    // );
};

export default PagePrivate;