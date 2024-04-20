import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLogo from "../assets/NavLogo.png";
import iconHamburger from "../assets/iconHamburger.svg";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { BsMenuDown } from "react-icons/bs";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Pages = [
    {
      id: 1,
      name: "Home",
      link: "/#Home",
    },
    {
      id: 2,
      name: "Services",
      link: "/FiliPay.html",
    },
    {
      id: 3,
      name: "News",
      link: "/#News",
    },
    {
      id: 4,
      name: "About",
      link: "/about.html", 
    },
    {
      id: 5,
      name: "FAQs",
      link: "/FAQs",
    },
    {
      id: 6,
      name: "Contact Us",
      link: "/#Contact Us",
    },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <div className="text-white bg-gradient-to-r from bg-slate-950 to-slate/90">
      <div className="container py-8">
        <div className="flex items-center justify-between gap-4">
          
          <div className="">
            <img className="lg:absolute top-8 left-8 w-[390px]" src={NavLogo} alt="" />
          </div>

          
          <img className="fixed z-10 cursor-pointer right-10 top-6 md:hidden" src={iconHamburger} />
          <div className="flex items-center justify-between gap-2">
            <ul className={"md:pl-15 pr-16 z-10 md:static fixed top-0 md:h-auto h-screen ${!open ? 'right-[-100]' : 'right-0'}"}>
              {Pages.map((data, index) => (
                <li key={index} className="my-6 duration-200 border-transparent md:inline-flex hover:border-slate-900 md:my-0">
                  <Link to={data.link} className="flex items-center h-10 px-4 transition border-b-2 cursor-pointer hover:text-blue-500 border-slate-900">
                    {data.name}
                  </Link>
                </li>
              ))}
            </ul>
            <button className="items-center hidden py-3 duration-200 rounded-full bg-sky-600 px-7 hover:scale-105 md:flex">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
