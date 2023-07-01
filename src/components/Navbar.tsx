import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLinksProps } from "../types";
import { Link as ScrollLink } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

//NavLinks
const navLinks: NavLinksProps[] = [
  { name: "Home", url: "/" },
  { name: "Services", url: "services" },
  { name: "Subscribe", url: "contact" },
];

const Navbar = () => {
  const [nav, setNav] = useState<string | boolean>(false);
  return (
    <div className="h-[80px] px-[20px] md:px-[50px] py-[24px] flex justify-between items-center overflow-hidden">
      <Link to="/" className="flex items-center">
        <img src="/logo.png" alt="logo" style={{ width: "70px" }} />
      </Link>
      <div className="hidden md:flex items-center gap-[40px] text-black font-bold">
        {navLinks.map((link) => (
          <ScrollLink
            to={link.url}
            smooth={true}
            duration={500}
            key={link.name}
            className="text-[20px] cursor-pointer"
          >
            {link.name}
          </ScrollLink>
        ))}
      </div>
      <div className="hidden md:block">
        <Link to="/pay">
          <button className="rounded-lg bg-blue-500 text-white px-[30px] py-[14px]">
            Book Now
          </button>
        </Link>
      </div>

      {/* Mobile version */}
      <div className="flex md:hidden overflow-hidden">
        <div className="cursor-pointer" onClick={() => setNav(true)}>
          <AiOutlineMenu style={{ color: "black", fontSize: "40px" }} />
        </div>
        <div
          className={
            nav
              ? "w-full h-full z-50 fixed left-0 top-0 bg-gray-900/70 text-white md:hidden backdrop-blur"
              : ""
          }
        >
          <div
            className={
              nav
                ? "fixed w-full text-center bg-black left-0 top-0 bottom-0 text-white h-full p-10 py-10 ease-in duration-500"
                : "fixed p-10 w-full left-[-100%] z-50 top-0 duration-1000 h-full ease-in"
            }
          >
            <div className="w-full flex justify-between items-center mb-[5rem]">
              <div className="cursor-pointer p-0" onClick={() => setNav(false)}>
                <Link to="/">
                  <img src="logo.png" alt="site logo" width={100} height={60} />
                </Link>
              </div>
              <div className="cursor-pointer" onClick={() => setNav(false)}>
                <FaTimes size={30} />
              </div>
            </div>
            <div className="flex flex-col text-black justify-between h-fit mb-[10px]">
              {navLinks.map((link) => (
                <ScrollLink
                  onClick={() => setNav(false)}
                  to={link.url}
                  smooth={true}
                  duration={500}
                  key={link.name}
                  className="text-[18px] mb-[50px] text-white font-bold cursor-pointer"
                >
                  {link.name}
                </ScrollLink>
              ))}
              <Link to="/pay">
                <button className="rounded-lg bg-blue-500 text-white px-[30px] py-[14px]">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
