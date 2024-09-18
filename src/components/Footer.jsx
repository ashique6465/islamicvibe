import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div id="footer" className="bg-[#082547] py-8 text-center mt-16">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <ul className="flex justify-center gap-6 sm:gap-16 cursor-pointer text-white md:flex-row flex-col">
          <li className="hover:text-[#F4DF9C] rounded-md px-2 sm:px-4 py-2 transition-colors duration-300">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
              className="hover:text-[#F4DF9C]"
            >
              Home
            </ScrollLink>
          </li>
          <li className="hover:text-[#F4DF9C] rounded-md px-2 sm:px-4 py-2 transition-colors duration-300">
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
              className="hover:text-[#F4DF9C]"
            >
              About
            </ScrollLink>
          </li>
          <li className="hover:text-[#F4DF9C] rounded-md px-2 sm:px-4 py-2 transition-colors duration-300">
            <ScrollLink
              to="videos"
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
              className="hover:text-[#F4DF9C]"
            >
              Videos
            </ScrollLink>
          </li>
          <li className="hover:text-[#F4DF9C] rounded-md px-2 sm:px-4 py-2 transition-colors duration-300">
            <ScrollLink
              to="services"
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
              className="hover:text-[#F4DF9C]"
            >
              Services
            </ScrollLink>
          </li>
        </ul>
      </div>

      <div className="flex justify-center   mt-4 text-white text-center">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={faFacebook}
            className="h-6 w-6  sm:ml-6 hover:text-[#F4DF9C] cursor-pointer"
          />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={faInstagram}
            className="h-6 w-6 ml-24 sm:ml-6 hover:text-[#F4DF9C] cursor-pointer"
          />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={faYoutube}
            className="h-6 w-6 ml-24 sm:ml-6 hover:text-[#F4DF9C] cursor-pointer"
          />
        </a>
      </div>

      <div className="text-white mt-4">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
