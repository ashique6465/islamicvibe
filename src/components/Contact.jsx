import React, { useState } from "react";
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
import emailjs from "emailjs-com";

const contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_495kfnh",
        "template_epbmeen",
        formData,
        "hf0-XeFGZte7c7Uro"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        },

        (error) => {
          console.log(error.text);
        }
      );
  };

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
              <Link to="https://www.facebook.com/share/5MXaZfeDLJiUbf3V/?mibextid=qi2Omg">
                <FontAwesomeIcon
                  icon={faFacebook}
                  color="blue"
                  className="w-8 h-8"
                />
              </Link>
              <Link to="https://www.instagram.com/theislamicvibe0786?utm_source=qr&igsh=enNuNDFvY3VwY3Bp">
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
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm">
                    Your name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-gray-300"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-gray-300"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="Phone" className="text-sm">
                    Mobile No.
                  </label>
                  <input
                    type="phone"
                    name="phone"
                    placeholder="Your Number"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-gray-300"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Type your message"
                    rows={4}
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-gray-300"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="inline-block self-end px-6 py-2 font-bold rounded-lg text-white bg-gray-500 text-sm "
                >
                  Send Message
                </button>
              </form>
              {isSent && (
                <p className="text-green-500 font-semibold">
                  Your message has been sent successfully!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
