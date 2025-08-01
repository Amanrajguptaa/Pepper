import React from "react";

const NewsLetter = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-0 py-10 bg-white max-w-6xl mx-auto">
      {/* Left Image Section */}
      <div className="flex justify-start w-full md:w-1/2 mb-8 md:mb-0">
        <img
          src="/assets/heroPizza.png"
          alt="Pizza"
          className="w-72 md:w-96 lg:w-[500px] object-contain"
        />
      </div>

      {/* Right Content Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:leading-14">
          Delicious Deals, <br /> Just for You
        </h1>
        <p className="text-gray-700 mb-6 text-md">
          Sign up for our newsletter and receive exclusive offers on new pizzas!
        </p>

        <div className="flex flex-col w-full items-center gap-3">
          <input
            type="email"
            placeholder="youremail@email.com"
            className="w-full px-5 py-3 rounded-full border border-gray-300 outline-none focus:ring-2 focus:ring-[#FF003C] text-gray-700"
          />
          <button
            className="w-full bg-[#FF003C] text-white px-10 py-3 rounded-full hover:bg-[#e00035] transition-all duration-300"
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
