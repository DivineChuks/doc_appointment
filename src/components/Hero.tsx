import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 px-[20px] md:px-[50px] pt-[50px]">
      <div className="flex-1">
        <h2 className="text-[65px] font-bold leading-[80px] mb-[30px]">
          Seamless. Flexible. Booking.
        </h2>
        <p className="text-[20px] font-light my-[30px] md:my-[20px]">
          Take charge of your mental well-being with our effortless appointment
          booking platform. Secure the support you need with just a few clicks,
          whether it's therapeutic consultations, counseling sessions, or
          mindfulness practices.
        </p>
        <Link to="/pay">
          <button className="bg-blue-500 text-white rounded-lg px-[30px] py-[15px]">
            Book Now
          </button>
        </Link>
      </div>
      <div className="flex-1 mt-[20px] md:mt-0">
        <img src="/doctor.png" alt="hero" className="w-[100%]" />
      </div>
    </div>
  );
};

export default Hero;
