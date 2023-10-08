import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Card = ({data}) => {
    const {image,price,service,description}=data
  return (
    <div data-aos="zoom-in-up" className="w-full ">
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt={service}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{service}</h2>
          <p>{description}</p>
          <p>price: {price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
