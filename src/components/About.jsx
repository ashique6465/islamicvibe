import React from "react";

const About = () => {
  return (
    <div id="about" className="flex flex-col md:flex-row justify-between p-4 md:p-8">
      <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
        <img
          className="w-full h-[300px] md:w-[500px] md:h-[500px] object-cover"
          src="/images/about.jpeg"
          alt="About Us"
        />
      </div>
      <div className="w-[2px] bg-[#082547] hidden md:block mx-4 mr-8"></div>
      <div className="w-full md:w-1/2 text-lg font-semibold text-gray-800 flex flex-col justify-center items-center">
        <h2 className="text-3xl md:text-6xl mb-4">What We Do</h2>
        <p className="text-black text-sm md:text-base leading-relaxed text-center">
          We provide uplifting Islamic content through Naat, Taqreer, and more,
          spreading the beauty of Islamic teachings and values to a global
          audience. From soulful Naats to insightful Taqreers and joyous
          festival celebrations, our goal is to bring you closer to the essence
          of faith and unity. Join us in celebrating Islam’s spiritual richness
          and sharing its timeless message of peace and compassion.
        </p>
        <a
          href="https://www.youtube.com/@theislamicvibe0786"
          className="p-3 md:p-4 bg-red-500 rounded-xl text-white mt-5 font-semibold hover:bg-red-600 transition-transform transform hover:scale-110 duration-300"
        >
          YouTube
        </a>
      </div>
    </div>
  );
};

export default About;
