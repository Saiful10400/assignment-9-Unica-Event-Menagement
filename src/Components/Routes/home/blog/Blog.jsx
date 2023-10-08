import React, { useEffect, useState } from 'react';
import SingleBlog from './SingleBlog';

const Blog = () => {
    const [data,setdata]=useState([])
    useEffect(()=>{
        fetch("/Blog.json")
    .then(res=>res.json())
    .then(data=>setdata(data))
    },[])
   console.log(data)
    return (
        <div className='lg:w-[1400px] mx-auto'>
            
           {
            data.map(item=><SingleBlog data={item}></SingleBlog>)
           }
        </div>
    );
};

export default Blog;