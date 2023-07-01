import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-[80px] px-[20px] md:px-[50px] py-[24px] flex justify-between items-center overflow-hidden">
      <Link to="/" className="flex items-center">
        <img src="/logo.png" alt="logo" style={{ width: "70px" }} />
      </Link>
      <div className="flex items-center gap-[47px] text-white">
        <Link to="/pay">
          <button className="rounded-lg bg-blue-500 text-white px-[30px] py-[14px]">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
