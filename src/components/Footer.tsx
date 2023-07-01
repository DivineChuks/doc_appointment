import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="contact" className="bg-black pt-[50px] z-0 px-[20px] md:px-[70px] overflow-hidden">
      <div className="hidden md:grid md:grid-cols-5 text-white">
        <div className="col-span-1 md:col-span-2">
          <div className="mb-[20px]">
            <img src="logo.png" alt="logo" height={40} width={100} />
          </div>
          <p className="font-glacial text-[#A3A3A3] text-[20px] mb-8">
            contact@friendnpal
          </p>
          {/* <div className="flex gap-4">
            <Image
              src="/images/facebook.svg"
              className="cursor-pointer"
              alt="facebook logo"
              width={18}
              height={18}
            />
            <Image
              src="/images/instagram.svg"
              className="cursor-pointer"
              alt="facebook logo"
              width={18}
              height={18}
            />
            <Image
              src="/images/twitter.svg"
              className="cursor-pointer"
              alt="facebook logo"
              width={18}
              height={18}
            />
            <Image
              src="/images/linkedin.svg"
              className="cursor-pointer"
              alt="facebook logo"
              width={18}
              height={18}
            />
          </div> */}
        </div>
        <div className="col-span-1">
          <h2 className="font-nohemi text-[30px] mb-[36px]">Subscribe</h2>
          <div className="flex gap-2 items-center">
            <input
              type="email"
              placeholder="Your Email"
              className="bg-transparent w-[145px] focus:outline-none border border-white rounded-lg py-2 px-2 placeholder:text-white"
            />
            <div className="bg-white cursor-pointer w-[40px] h-[40px] rounded-lg justify-center items-center flex">
              <img
                src="chevron.png"
                alt="chevron"
                className="object-contain"
                width={10}
                height={10}
              />
            </div>
          </div>
        </div>
        <div className="">
          <h2 className="font-nohemi text-[30px] mb-[36px]">Company</h2>
          <Link to="#">
            <p className="text-[20px] text-[#A3A3A3] cursor-pointer font-glacial mb-[20px]">
              About us
            </p>
          </Link>
          <Link to="#">
            <p className="text-[20px] text-[#A3A3A3] cursor-pointer  font-glacial mb-[20px]">
              Contact us
            </p>
          </Link>
          <Link to="#">
            <p className="text-[20px] text-[#A3A3A3] cursor-pointer mb-[20px]">
              FAQs
            </p>
          </Link>
        </div>
        <div>
          <h2 className="font-nohemi text-[30px] mb-[36px]">Legal</h2>
          <Link to="#">
            <p className="text-[20px] text-[#A3A3A3] cursor-pointer  font-glacial mb-[20px]">
              Privacy policy
            </p>
          </Link>
          <Link to="#">
            <p className="text-[20px] text-[#A3A3A3] cursor-pointer  font-glacial mb-[20px]">
              Terms & conditions
            </p>
          </Link>
        </div>
      </div>
      <hr className="w-full hidden md:block mb-[50px]" />
      <div className="w-full hidden md:flex justify-end mt-[16px]">
        <p className="text-[20px] text-[#A3A3A3] font-glacial mb-[70px]">
          © Copyright 2023. FriendnPal
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 md:hidden">
        <div className="">
          <h2 className="font-nohemi text-white text-[26px] mb-[36px]">
            Company
          </h2>
          <Link to="#">
            <p className="text-[20px] text-[#A3A3A3] cursor-pointer font-glacial mb-[20px]">
              About us
            </p>
          </Link>
          <Link to="#">
            <p className="text-[20px] text-[#A3A3A3] cursor-pointer  font-glacial mb-[20px]">
              Contact us
            </p>
          </Link>
          <Link to="faqs">
            <p className="text-[20px] text-[#A3A3A3] cursor-pointer font-glacial mb-[20px]">
              FAQs
            </p>
          </Link>
        </div>
        <div>
          <h2 className="font-nohemi text-[26px] text-white mb-[36px]">
            Legal
          </h2>
          <Link to="#">
            <p className="text-[20px] text-[#A3A3A3] cursor-pointer  font-glacial mb-[20px]">
              Privacy policy
            </p>
          </Link>
          <Link to="#">
            <p className="text-[20px] text-[#A3A3A3] cursor-pointer  font-glacial mb-[20px]">
              Terms & conditions
            </p>
          </Link>
        </div>
      </div>
      <div className="grid mt-[20px] grid-cols-2 md:hidden">
        <div className="">
          <div className="mb-[10px]">
            <img src="logo.png" alt="logo" height={80} width={80} />
          </div>
          <p className="font-glacial text-[#A3A3A3] text-[20px] mb-8">
            contact@<br></br>friendnpal
          </p>
          {/* <div className="flex gap-4">
            <Image
              src="/images/facebook.svg"
              className="cursor-pointer"
              alt="facebook logo"
              width={18}
              height={18}
            />
            <Image
              src="/images/instagram.svg"
              className="cursor-pointer"
              alt="facebook logo"
              width={18}
              height={18}
            />
            <Image
              src="/images/twitter.svg"
              className="cursor-pointer"
              alt="facebook logo"
              width={18}
              height={18}
            />
            <Image
              src="/images/linkedin.svg"
              className="cursor-pointer"
              alt="facebook logo"
              width={18}
              height={18}
            />
          </div> */}
        </div>
        <div className="">
          <h2 className="font-nohemi text-white text-[26px] mb-[36px]">
            Subscribe
          </h2>
          <div className="flex gap-2 items-center">
            <input
              type="email"
              placeholder="Your Email"
              className="bg-transparent w-[120px] focus:outline-none border border-white rounded-lg py-2 px-2 placeholder:text-white"
            />
            <div className="bg-white cursor-pointer w-[40px] h-[40px] rounded-lg justify-center items-center flex">
              <img
                src="chevron.png"
                alt="chevron"
                className="object-contain"
                width={10}
                height={10}
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full md:hidden mt-[50px] mb-[20px]" />
      <div className="w-full flex md:hidden justify-end mt-[16px]">
        <p className="text-[25px] text-[#A3A3A3] font-glacial mb-[70px]">
          © Copyright 2023. FriendnPal
        </p>
      </div>
    </div>
  );
};

export default Footer;
