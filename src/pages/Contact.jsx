import { useState } from "react";
import contactImg from "../assets/contact.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    // API call can be added here
  };

  return (
    <section className="bg-[#C79A6D] py-[60px] md:pb-0 pb-[60px]">
      <div className="page-width mx-auto px-4 grid md:grid-cols-2 gap-[40px] items-center">

        {/* Image */}
        <div className="md:flex hidden justify-center md:justify-start">
          <img
            src={contactImg}
            alt="Contact"
            className="object-contain"
          />
        </div>

        {/* Form */}
        <div>
          <h2 className="!text-white md:!text-[50px] !text-[40px] !font-bold !mb-[20px]">
            CONTACT <span className="font-light">US</span>
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-[15px]"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-[#EDEDED] rounded-md px-4 py-3 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-[#EDEDED] rounded-md px-4 py-3 outline-none"
            />

            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-[#EDEDED] rounded-md px-4 py-3 outline-none resize-none"
            />

            <button
              type="submit"
              className="bg-[#FF8500] text-white font-semibold py-3 rounded-md mt-[10px] hover:opacity-90 transition"
            >
              SUBMIT
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;