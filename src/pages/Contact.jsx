import contactImg from "../assets/contact.png";

function Contact() {
  return (
    <section className="bg-[#C79A6D] py-[60px] md:pb-0 pb-[60px]">
      <div className="page-width mx-auto px-4 grid md:grid-cols-2 gap-[40px] items-center">
        
        <div className="md:flex hidden justify-center md:justify-start">
          <img
            src={contactImg}
            alt="Contact"
            className="object-contain"
          />
        </div>

        <div>
          <h2 className="!text-white md:!text-[50px] !text-[40px] !font-bold !mb-[20px]">
            CONTACT <span className="font-light">US</span>
          </h2>

          <form className="flex flex-col gap-[15px]">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-[#EDEDED] rounded-md px-4 py-3 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="bg-[#EDEDED] rounded-md px-4 py-3 outline-none"
            />

            <textarea
              placeholder="Message"
              rows="5"
              className="bg-[#EDEDED] rounded-md px-4 py-3 outline-none resize-none"
            ></textarea>

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