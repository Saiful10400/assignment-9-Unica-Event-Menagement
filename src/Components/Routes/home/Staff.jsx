import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { FaFacebookF } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Staff = () => {

  // data-aos="flip-up"

  return (
    <div className="max-w-[1400px] mx-auto my-20">
      <h1 data-aos="zoom-in"  className="vidolaka text-center mb-14 text-5xl">Our team</h1>
      <div data-aos="fade-up" >
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >


          <SwiperSlide>
            <div className="h-[50vh] flex flex-col justify-center items-center">

                <img className="w-36 h-36 object-cover rounded-full" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" alt="" />
                <p className="lg:text-3xl text-base mt-3">Olivia Thompson</p>
                <p className="lg:text-xl text-sm font-extrabold text-gray-500">Event Coordinator</p>
                <div className="flex gap-3 mt-4">
                    <a href="#"><FaFacebookF></FaFacebookF></a>
                    <a href="#"><BsLinkedin></BsLinkedin></a>
                    <a href="#"><RiTwitterXLine></RiTwitterXLine></a>
                </div>

            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[50vh] flex flex-col justify-center items-center">

                <img className="w-36 h-36 object-cover rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
                <p className="lg:text-3xl text-center text-base mt-3">Marcus Rodriguez</p>
                <p className="lg:text-xl text-center text-sm font-extrabold text-gray-500">Logistics Manager</p>
                <div className="flex gap-3 mt-4">
                    <a href="#"><FaFacebookF></FaFacebookF></a>
                    <a href="#"><BsLinkedin></BsLinkedin></a>
                    <a href="#"><RiTwitterXLine></RiTwitterXLine></a>
                </div>

            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[50vh] flex flex-col justify-center items-center">

                <img className="w-36 h-36 object-cover rounded-full" src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" alt="" />
                <p className="lg:text-3xl text-center text-base mt-3">Emily Chen</p>
                <p className="lg:text-xl text-center text-sm font-extrabold text-gray-500">Creative Director</p>
                <div className="flex gap-3 mt-4">
                    <a href="#"><FaFacebookF></FaFacebookF></a>
                    <a href="#"><BsLinkedin></BsLinkedin></a>
                    <a href="#"><RiTwitterXLine></RiTwitterXLine></a>
                </div>

            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[50vh] flex flex-col justify-center items-center">

                <img className="w-36 h-36 object-cover rounded-full" src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80" alt="" />
                <p className="lg:text-3xl text-base mt-3">Alex Morgan</p>
                <p className="lg:text-xl text-sm font-extrabold text-gray-500">Marketing Specialist</p>
                <div className="flex gap-3 mt-4">
                    <a href="#"><FaFacebookF></FaFacebookF></a>
                    <a href="#"><BsLinkedin></BsLinkedin></a>
                    <a href="#"><RiTwitterXLine></RiTwitterXLine></a>
                </div>

            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[50vh] flex flex-col justify-center items-center">

                <img className="w-36 h-36 object-cover rounded-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="" />
                <p className="lg:text-3xl text-base mt-3">Jordan Patel</p>
                <p className="lg:text-xl text-sm font-extrabold text-gray-500">Technical Support Lead</p>
                <div className="flex gap-3 mt-4">
                    <a href="#"><FaFacebookF></FaFacebookF></a>
                    <a href="#"><BsLinkedin></BsLinkedin></a>
                    <a href="#"><RiTwitterXLine></RiTwitterXLine></a>
                </div>

            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[50vh] flex flex-col justify-center items-center">

                <img className="w-36 h-36 object-cover rounded-full" src="https://images.unsplash.com/photo-1544168190-79c17527004f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80" alt="" />
                <p className="lg:text-3xl text-base mt-3">Sophia Nguyen</p>
                <p className="lg:text-xl text-sm font-extrabold text-gray-500">Client Relations Manager</p>
                <div className="flex gap-3 mt-4">
                    <a href="#"><FaFacebookF></FaFacebookF></a>
                    <a href="#"><BsLinkedin></BsLinkedin></a>
                    <a href="#"><RiTwitterXLine></RiTwitterXLine></a>
                </div>

            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[50vh] flex flex-col justify-center items-center">

                <img className="w-36 h-36 object-cover rounded-full" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2048&q=80" alt="" />
                <p className="lg:text-3xl text-base mt-3">Jackson Brown</p>
                <p className="lg:text-xl text-sm font-extrabold text-gray-500">Finance and Budget Analyst</p>
                <div className="flex gap-3 mt-4">
                    <a href="#"><FaFacebookF></FaFacebookF></a>
                    <a href="#"><BsLinkedin></BsLinkedin></a>
                    <a href="#"><RiTwitterXLine></RiTwitterXLine></a>
                </div>

            </div>
          </SwiperSlide>

          
        </Swiper>
      </div>
    </div>
  );
};

export default Staff;
