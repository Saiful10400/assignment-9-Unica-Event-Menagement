import {ImLocation} from "react-icons/im"
import {BsClockHistory} from "react-icons/bs";
import {FaPhoneAlt} from "react-icons/fa";
import {MdOutlineEditNote} from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Contact = () => {
    return (
      <>
        <div className="my-20 max-w-[1400px] mx-auto">
          <h1
            data-aos="fade-up"
            className="vidolaka text-5xl font-normal text-center mb-24"
          >
            Contact Us
          </h1>
          <div className="  Vidaloka">
            {/* details */}
            <div className=" w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10">
              <div data-aos="flip-up" className="flex gap-4">
                <ImLocation className="text-[#FCB41E] text-5xl"></ImLocation>
                <div className="text-xl">
                  <p className=" font-normal">Postal Address</p>
                  <p className="mt-3 text-base font-bold">
                    Unica Event Agency 85 <br /> Fentiman Ave Ottawa, ON K1S 0T7
                  </p>
                </div>
              </div>

              <div data-aos="flip-up" className="flex gap-4">
                <BsClockHistory className="text-[#FCB41E] text-5xl"></BsClockHistory>
                <div className="text-xl">
                  <p className=" font-normal">Open Hours</p>
                  <p className="mt-3 text-base font-bold">
                    Monday – Friday 8.00 am – 5.00 pm, Weekend Closed
                  </p>
                </div>
              </div>

              <div data-aos="flip-up" className="flex gap-4">
                <FaPhoneAlt className="text-[#FCB41E] text-5xl"></FaPhoneAlt>
                <div className="text-xl">
                  <p className=" font-normal">Phone & E-mail</p>
                  <p className="mt-3 text-base font-bold">
                    Phone: <span className="text-[#FCB41E] underline hover:no-underline cursor-pointer">1-800-64-38</span> Fax: 1-800-64-39 <span className="text-[#FCB41E] underline hover:no-underline cursor-pointer">info@ancorathemes.com</span>
                  </p>
                </div>
              </div>

              <div data-aos="flip-up" className="flex gap-4">
                <MdOutlineEditNote className="text-[#FCB41E] text-5xl"></MdOutlineEditNote>
                <div className="text-xl">
                  <p className=" font-normal">Sessions</p>
                  <p className="mt-3 text-base font-bold">
                  Mornings: 8 am – 12 am, Afternoons: 1 pm – 5 pm, Full Day: 8 am – 5 pm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Contact;