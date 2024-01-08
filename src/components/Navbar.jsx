import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <div className="fixed flex justify-between items-center w-full h-[80px] px-4 bg-[#0a192f] text-gray-300">
      <div>
        <h1>Logo</h1>
      </div>
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
      {/* Hamburger */}
      <div className="md:hidden z-10" onClick={() => setNav(!nav)}>
        {nav ? <IoMdClose /> : <GiHamburgerMenu />}
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "md:hidden absolute flex flex-col justify-center items-center top-0 w-full left-0 h-screen bg-[#0a192f]"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>
      {/* social icons */}
      <div className="invisible  lg:visible fixed flex flex-col left-0 top-[35%]">
        <ul>
          <li className="flex w-[160px] h-[60px] items-center justify-between ml-[-100px] hover:ml-[0px] duration-300 bg-blue-700">
            <a className="flex justify-between items-center w-full" href="">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="flex w-[160px] h-[60px] items-center justify-between ml-[-100px] hover:ml-[0px] duration-300 bg-black">
            <a className="flex justify-between items-center w-full" href="">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="flex w-[160px] h-[60px] items-center justify-between ml-[-100px] hover:ml-[0px] duration-300 bg-red-600">
            <a className="flex justify-between items-center w-full" href="">
              Gmail <SiGmail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
