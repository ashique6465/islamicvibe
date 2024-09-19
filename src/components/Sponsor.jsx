import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const SponsorshipForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    sponsorshipType: "",
    productType: "",
    message: "",
    budget: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setSuccessMessage(
            "Your request has been submitted. We will contact you soon."
          );
          setFormData({
            name: "",
            companyName: "",
            email: "",
            sponsorshipType: "",
            productType: "",
            message: "",
            budget: "",
          });
        },
        (error) => {
          console.log("Email failed to send:", error.text);
          alert("Failed to send sponsorship request. Please try again.");
        }
      );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-lg md:w-1/2 lg:w-1/3">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
            Sponsorship Request
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-gray-700 text-sm sm:text-base">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Company Name Field */}
          <div>
            <label className="block text-gray-700 text-sm sm:text-base">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700 text-sm sm:text-base">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Sponsorship Type Field */}
          <div>
            <label className="block text-gray-700 text-sm sm:text-base">
              Sponsorship Type
            </label>
            <select
              name="sponsorshipType"
              value={formData.sponsorshipType}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select</option>
              <option value="promotion">Promotion</option>
              <option value="productPlacement">Product Review</option>
              <option value="collaboration">Collaboration</option>
              <option value="branding">Branding</option>
            </select>
          </div>

          {/* Product Type Field */}
          <div>
            <label className="block text-gray-700 text-sm sm:text-base">
              Product Type
            </label>
            <select
              name="productType"
              value={formData.productType}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select</option>
              <option value="cosmetic">Cosmetic</option>
              <option value="perfumes">Perfumes</option>
              <option value="book">Book</option>
              <option value="electronic">Electronic</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Budget Field */}
          <div>
            <label className="block text-gray-700 text-sm sm:text-base">
              Budget or Offer Range
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-700">
                ₹
              </span>
              <input
                type="text"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full mt-1 p-2 pl-8 border border-gray-300 rounded-md"
                placeholder="Enter your budget"
              />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-gray-700 text-sm sm:text-base">
              Message or Proposal
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              rows="5"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Submit Sponsorship Request
          </button>

          {/* Centered Back to Home Button */}
          <div className="flex justify-center mt-4">
            <button
              className="text-blue-600 underline flex items-center"
              onClick={() => navigate("/")}
            >
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              Back to Home
            </button>
          </div>
        </form>

        {/* Success Message */}
        {successMessage && (
          <p className="text-green-600 mt-4">{successMessage}</p>
        )}
      </div>
    </div>
  );
};

export default SponsorshipForm;
