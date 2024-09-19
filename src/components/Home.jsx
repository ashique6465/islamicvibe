import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactTyped } from "react-typed";

const Home = () => {
  const navigate = useNavigate();

  const handleSponsorshipClick = (e) => {
    e.preventDefault();
    navigate("/sponsorship");
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center p-4 sm:p-8 text-[whitesmoke]">
        <h3 className="text-lg sm:text-2xl mb-2 font-semibold">Welcome to</h3>
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-[#FFD700]">
          <ReactTyped
            strings={["The Islamic Vibe"]}
            typeSpeed={100}
            backSpeed={40}
            loop={true}
          />
        </h1>
        <p className="text-sm sm:text-lg font-semibold w-11/12 sm:w-3/4 text-[#F4F4F4]">
          This channel is dedicated to spreading the beauty of Islamic teachings
          through Naat, Taqreer, and other inspiring content. Join us in
          exploring the wisdom of faith and the message of peace. Subscribe for
          regular updates and uplifting Islamic videos.
        </p>
      </div>
      <div className="flex justify-center font-bold text-lg sm:text-xl text-black mt-4 ">
        <button
          className="bg-[#FFBF00] p-3 rounded-xl sm:w-auto max-sm:w-52 transition-transform transform hover:scale-110 flex items-center space-x-2"
          onClick={handleSponsorshipClick}
        >
          
          <img
            src="/images/sponsor.svg"
            alt="Sponsorship Icon"
            className="h-6 w-6"
          />
          <span>Get Sponsorship</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
