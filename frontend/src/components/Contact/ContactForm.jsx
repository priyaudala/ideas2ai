import React from "react";

const ContactForm = () => {
  return (
    <section className="bg-[#f7f8fa] pb-20">
      <div className="max-w-screen-xl mx-auto px-4">

        <div className="bg-white rounded-3xl shadow-sm p-6 md:p-12">

          <h2 className="text-center text-2xl md:text-3xl font-bold text-[#0b1b3f] mb-10">
            Get In Touch
          </h2>

          <form className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Your name"
              className="w-full p-4 rounded-full border outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 rounded-full border outline-none"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-4 rounded-full border outline-none"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full p-4 rounded-full border outline-none"
            />

            <textarea
              placeholder="Message"
              rows="5"
              className="md:col-span-2 w-full p-4 rounded-2xl border outline-none"
            ></textarea>

            <div className="md:col-span-2 text-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-3 rounded-full font-semibold hover:scale-105 transition">
                Send Message →
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;
