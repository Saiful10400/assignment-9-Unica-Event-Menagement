import React, { useContext } from 'react';
import { datacontext } from '../../../DataProvider';

const BlogPrivate = ({children}) => {
    const {user}=useContext(datacontext)
    if(user){
        return children
    }
    else{
        return <h2>hello blog</h2>
    }
};

export default BlogPrivate;