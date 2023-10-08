import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";

const Slider = () => {
  return (
  
  <div>
       <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="slider1 w-full h-[80vh] flex flex-col items-center justify-center bg-gray-300 ">
          <h1
            data-aos="fade-down"
            data-aos-duration="2000"
            className="vidolaka text-5xl lg:text-8xl text-[#FCB41E] "
          >
            Your Vision,
          </h1>
          <h3
            data-aos="fade-up"
            data-aos-duration="2000"
            className="vidolaka text-3xl text-center lg:text-7xl mt-3 text-white"
          >
            Our Mission: Perfect Birthdays!
          </h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider2 w-full h-[80vh] flex flex-col items-center justify-center bg-gray-300 ">
          <h1
            data-aos="fade-down"
            data-aos-duration="2000"
            className="vidolaka text-5xl lg:text-8xl text-[#FCB41E] "
          >
            Where Love Takes Center Stage,
          </h1>
          <h3
            data-aos="fade-up"
            data-aos-duration="2000"
            className="vidolaka text-3xl text-center lg:text-7xl mt-3 text-white"
          >
             We Craft Unforgettable Chapters.
          </h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider3 w-full h-[80vh] flex flex-col items-center justify-center bg-gray-300 ">
          <h1
            data-aos="fade-down"
            data-aos-duration="2000"
            className="vidolaka text-5xl lg:text-8xl text-[#FCB41E] "
          >
            From Concept to Cooing
          </h1>
          <h3
            data-aos="fade-up"
            data-aos-duration="2000"
            className="vidolaka text-3xl text-center lg:text-7xl mt-3 text-white"
          >
            We Designs Your Dream Baby Shower!
          </h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider4 w-full h-[80vh] flex flex-col items-center justify-center bg-gray-300 ">
          <h1
            data-aos="fade-down"
            data-aos-duration="2000"
            className="vidolaka text-5xl lg:text-8xl text-[#FCB41E] "
          >
           Dreaming of an Unforgettable Bash?
          </h1>
          <h3
            data-aos="fade-up"
            data-aos-duration="2000"
            className="vidolaka text-3xl text-center lg:text-7xl mt-3 text-white"
          >
             Let us Make it Reality!
          </h3>
        </div>
      </SwiperSlide>

      
    </Swiper>
  </div>
 
  );
};

export default Slider;
