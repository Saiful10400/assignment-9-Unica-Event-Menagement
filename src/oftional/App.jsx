import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Slider from '../oftional/Slider';

AOS.init();

const App = () => {

  const [img,setimg]=useState([])

useEffect(()=>{
  fetch("data.json")
  .then(res=>res.json())
  .then(data=>setimg(data))

})

  let man=[40,3,5,3,2,2,3,4,65]
  return (
   <>
<h2 className="saiful">hellow saiful red prectice.</h2>
   <Slider></Slider>
<img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" alt="" />
   <h1 className="h-[100vh] bg-pink-400 mb-4 flex justify-center items-center">
    <div>
    <h3 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="3000" className="text-5xl font-bold text-center">your phone our responsivility</h3>
     <h1 data-aos="fade-up" data-aos-delay="3000" className="text-6xl font-bold text-yellow-400">You grapu of prople is good</h1>
    </div>
   </h1>
   <h3 data-aos="fade-up" className="h-[90vh] bg-red-400">this is text</h3>

   <div className="grid grid-cols-2 gap-4">
   {
    man.map((item,idx)=><div data-aos="flip-left" className=" h-60 bg-green-600" key={idx}>this is {item}</div>)
   }
   </div>

   <div className="grid grid-cols-4 gap-5">

<h1>{img.length}</h1>

{
  img.map((data ,idx)=><img  data-aos="fade-up"  key={idx} src={data.image} alt="" />)
}
   </div>
   
   </>
  );
};

export default App;
