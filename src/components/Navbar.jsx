import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed flex justify-between items-center w-full h-[80px] px-4 bg-[#0a192f] text-gray-300">
      <div>
        <h1 className="font-logo text-3xl text-pink-600">AS</h1>
      </div>
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
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
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="flex w-[160px] h-[60px] items-center justify-between ml-[-100px] hover:ml-[0px] duration-300 bg-blue-700">
            <a className="flex justify-between items-center w-full" href="">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="flex w-[160px] h-[60px] items-center justify-between ml-[-100px] hover:ml-[0px] duration-300 bg-black">
            <a
              className="flex justify-between items-center w-full"
              href="https://github.com/azhar0102"
            >
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
