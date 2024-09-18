import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black opacity-50 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Navbar */}
      <div className="sticky top-0 z-50 flex items-center justify-between bg-[#082547] text-white font-bold text-lg px-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            className="cursor-pointer w-10 h-10 sm:w-16 sm:h-16"
            src="images/logo.png"
            alt="Logo"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 gap-16">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
            className="hover:text-[#F4DF9C] cursor-pointer"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            className="hover:text-[#F4DF9C] cursor-pointer"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="videos"
            smooth={true}
            duration={500}
            offset={-70}
            className="hover:text-[#F4DF9C] cursor-pointer"
          >
            Videos
          </ScrollLink>
          <ScrollLink
            to="services"
            smooth={true}
            duration={500}
            offset={-70}
            className="hover:text-[#F4DF9C] cursor-pointer"
          >
            Services
          </ScrollLink>
        </div>

        {/* Right Side */}
        <div className="flex items-center">
          {/* Contact Us Button */}
          <button className="border-2 border-[#ccb361] rounded-md px-2 py-1 cursor-pointer hover:text-white hover:bg-[#ccb361] text-[#00FFFF] text-sm">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={closeMenu}
            >
              Contact Us
            </ScrollLink>
          </button>

          {/* Hamburger Icon */}
          <div className="md:hidden ml-8 flex items-center">
            <button
              className="text-white focus:outline-none flex items-center"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } md:hidden flex-col items-center justify-center bg-[#082547] text-white text-sm w-full py-4 fixed top-16 left-0 z-40`}
      >
        <ul className="flex flex-col gap-4 cursor-pointer">
          <li className="hover:text-[#F4DF9C] px-4 py-2">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={closeMenu}
            >
              Home
            </ScrollLink>
          </li>
          <li className="hover:text-[#F4DF9C] px-4 py-2">
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={closeMenu}
            >
              About
            </ScrollLink>
          </li>
          <li className="hover:text-[#F4DF9C] px-4 py-2">
            <ScrollLink
              to="videos"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={closeMenu}
            >
              Videos
            </ScrollLink>
          </li>
          <li className="hover:text-[#F4DF9C] px-4 py-2">
            <ScrollLink
              to="services"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={closeMenu}
            >
              Services
            </ScrollLink>
          </li>
          <li className="hover:text-[#F4DF9C] px-4 py-2">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={closeMenu}
            >
              Contact Us
            </ScrollLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
