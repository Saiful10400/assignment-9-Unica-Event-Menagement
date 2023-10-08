import React, { useContext } from 'react';
import { datacontext } from '../../../DataProvider';

const AffiliatePrivate = ({children}) => {
    const {user}=useContext(datacontext)
    if(user){
        return children
    }
    else{
        return <h1>no uer for affiliate.</h1>
    }
};

export default AffiliatePrivate;