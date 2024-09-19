import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Videos from "./components/Videos";
import { Route, Routes } from "react-router-dom";
import Sponsor from "./components/Sponsor";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div
                className="relative w-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/h.jpg')",
                  height: "70vh",
                }}
              >
                <section id="home">
                  <Home />
                </section>
              </div>
              <section id="about">
                <About />
              </section>
              <section id="videos">
                <Videos />
              </section>
              <section id="contact">
                <Contact />
              </section>
              <section id="footer">
                <Footer />
              </section>
            </>
          }
        />
        <Route path="/sponsorship" element={<Sponsor />} />
      </Routes>
    </>
  );
};

export default App;
