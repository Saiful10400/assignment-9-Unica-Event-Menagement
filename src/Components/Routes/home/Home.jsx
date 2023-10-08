import { useLoaderData } from "react-router-dom";
import Slider from "./Slider";
import Card from "./Card";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Home = () => {
  const data = useLoaderData();

  console.log(data[2].image);

  return (
    <>
      <Slider></Slider>

      <div className="mt-24">
        <div data-aos="fade-right" className="text-5xl vidolaka font-normal">
          <p className="text-center">
            It is simple. You have an event to plan and
          </p>
          <h1 className="text-center my-9">
            we have <span className="text-[#FCB41E]">the solutions</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {data.map((item, idx) => (
            <Card key={idx} data={item}></Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
