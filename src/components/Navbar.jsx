import React from "react";
import { ReactTyped } from "react-typed";

const Navbar = () => {
  return (
    <>
      <div className=" relative flex items-center justify-between text-white font-bold text-lg p-4  ">
        <img
          className="ml-8 cursor-pointer"
          height={75}
          width={75}
          src="images/logo.png"
          alt=""
        />

        <ul className="flex gap-16 cursor-pointer mr-12 ">
          <li className="hover:bg-black hover:text-white rounded-md px-4 py-2 transition-colors duration-300 text-white">
            Home
          </li>
          <li className="hover:bg-black hover:text-white rounded-md px-4 py-2 transition-colors duration-300 text-white">
            About
          </li>
          <li className="hover:bg-black hover:text-white rounded-md px-4 py-2 transition-colors duration-300 text-white">
            Videos
          </li>
          <li className="hover:bg-black hover:text-white rounded-md px-4 py-2 transition-colors duration-300 text-white">
            Services
          </li>
        </ul>
        <button className="border-2 border-black rounded-md px-4 py-2 mr-8 cursor-pointer hover:text-white hover:bg-black text-white">
          Contact Us
        </button>
      </div>
      <div className=" flex flex-col items-center justify-center text-center p-8 text-[whitesmoke] ">
        <h1 className="text-5xl font-bold mb-4">
          <ReactTyped strings={["The Islamic Vibe"]} typeSpeed={40} />
        </h1>

        <p className="text-lg  font-semibold w-3/4">
          Welcome to The Islamic Vibe! This channel is dedicated to spreading
          the beauty of Islamic teachings through Naat, Taqreer, and other
          inspiring content. Join us in exploring the wisdom of faith and the
          message of peace. Subscribe for regular updates and uplifting Islamic
          videos.
        </p>
      </div>
      <div className="flex justify-center font-bold text-xl text-white ">
        <button className="bg-[#FDBD92] p-4 rounded-3xl">
          Get Sponsorship
        </button>
      </div>
    </>
  );
};

export default Navbar;
