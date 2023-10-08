import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Page = () => {
    const {id}=useParams()
    const loadedData=useLoaderData()
 
    const tobeshown=loadedData.find((item)=>item.id===id)
    
    return (
        <div>
            <h1>{tobeshown.service}</h1>
            <img src={tobeshown.image} alt="" />
        </div>
    );
};

export default Page;