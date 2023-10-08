import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import "./page.css"
import Contact from '../home/Contact';
const Page = () => {
    const {id}=useParams()
    const loadedData=useLoaderData()
 
    const tobeshown=loadedData.find((item)=>item.id===id)

    
    
    return (
        <div className='w-[1400px] mx-auto vidolaka'>
            <div className='flex flex-col lg:flex-row lg:gap-5 page'>
                <div className='lg:w-1/2'>
                    <img className='w-full rounded-lg' src={tobeshown.image} alt="" />
                </div>

                <div className='lg:w-1/2 text-white'>
                    <h1 className='text-5xl mt-4'>{tobeshown.service}</h1>
                    <h1 className='text-3xl mt-10 mb-6 text-orange-500 font-bold'>{tobeshown.price}</h1>
                    <p className='text-xl font-sans font-bold '>{tobeshown.description} <p className='mt-5'>{tobeshown.details}</p></p>

                    <button className='btn btn-primary bg-orange-500 text-white font-sans mt-5 border-none'>Contact us</button>
                    
                </div>
            </div>
            <Contact></Contact>
        </div>
    );
};

export default Page;