import AOS from "aos";
import "aos/dist/aos.css";
import { ImLocation } from 'react-icons/im';
import { Link } from "react-router-dom";
AOS.init();

const Card = ({data}) => {
    const {image,price,service,description,id}=data
  return (
    <div data-aos="zoom-in-up" className="w-full ">
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure>
          <img className="w-full"
            src={image}
            alt={service}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl h-20 lg:text-3xl">{service}</h2>
          <p className="h-32 text-base">{description}</p>
          <p className="text-xl font-bold">price: {price}</p>
          <div className="card-actions justify-end">
          <Link className=" w-full" to={`service/${id}`}> <button className="btn btn-primary w-full">Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
