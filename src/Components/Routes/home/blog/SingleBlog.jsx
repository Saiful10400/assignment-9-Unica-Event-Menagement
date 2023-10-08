import React from 'react';
import { FaUserTie } from "react-icons/fa";

const SingleBlog = ({data}) => {
    const{title,author,date,content,tags, id}=data
    return (
        <div className='bg-gray-100 mb-20 py-10 px-5 rounded-l-lg'>
            <h1 className='text-center text text-3xl'>Blog {id}</h1>
            <span className='text-8xl'><FaUserTie></FaUserTie></span>
           <p className='text-3xl'>{author}</p> 
           <p>{date}</p>
           {
            tags.map((item,idx)=><span className='bg-gray-200 ml-2' key={idx}>{item}</span>)
           }
           <p className='mt-20 mb-6 text-5xl'>{title}</p>
           <p className='text-xl text-gray-700'>{content}</p>
        </div>
    );
};

export default SingleBlog;