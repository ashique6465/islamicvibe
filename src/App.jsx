import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <div
        className="relative w-full  bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/mosque-4.jpg')",
          height: "70vh",
        }}
      >
        <Navbar />
      </div>
    </>
  );
};

export default App;
