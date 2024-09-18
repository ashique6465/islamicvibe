import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkedAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const contact = () => {
  return (
    <div id="contact" className="antialised bg-white mt-16">
      <div className="flex w-full m-h-screen justify-center items-center">
        <div className="flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-gray-100 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg">
          <div className="flex flex-col space-y-8 justify-between">
            <div>
              <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
              <p className="pt-2 text-black text-sm">
                Interested in collaborating, sponsoring, or promoting your brand
                through our content? We’d love to hear from you! Reach out to
                discuss potential partnerships and opportunities.
              </p>
            </div>
            <div className="flex flex-col space-y-6 ">
              <div className="inline-flex space-x-2 items-center">
                <FontAwesomeIcon icon={faPhone} size="" color="" />
                <span>+918789275868</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <FontAwesomeIcon icon={faEnvelope} size="" color="" />
                <span>mdsajid2942@gmail.com</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <FontAwesomeIcon icon={faMapMarkedAlt} size="" color="" />
                <span>Kathara, Asnapani, 829116</span>
              </div>
            </div>
            <div className="flex space-x-4 text-lg gap-4">
              <Link to="">
                <FontAwesomeIcon
                  icon={faFacebook}
                  color="blue"
                  className="w-8 h-8"
                />
              </Link>
              <Link>
                <img src="images/insta.svg" alt="" className="w-8 h-8" />
              </Link>
              <Link to="https://www.youtube.com/@theislamicvibe0786">
                <FontAwesomeIcon
                  icon={faYoutube}
                  color="#FF0201"
                  className="w-8 h-8"
                />
              </Link>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 md:w-80">
              <form action="" className="flex flex-col space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm">
                    Your name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-gray-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-gray-300"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm">
                    Message
                  </label>
                  <textarea
                    placeholder="Type your message"
                    rows={4}
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-gray-300"
                  ></textarea>
                </div>
                <button className="inline-block self-end px-6 py-2 font-bold rounded-lg text-white bg-gray-500 text-sm ">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
