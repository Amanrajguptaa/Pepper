import React from "react";

const About = () => {
  return (
    <section className="px-6 md:px-0 max-w-6xl mx-auto py-10">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          About Pepper
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
          A slice of passion, baked to perfection. At Pepper, every pizza tells a story of 
          love, tradition, and the freshest ingredients.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center relative group">
          <div className="absolute -inset-4 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition"></div>
          <img
            src="/assets/heroPizza.png"
            alt="Delicious Pizza"
            className="w-full max-w-lg transform group-hover:scale-105 transition duration-500 pointer-events-none"
          />
        </div>

        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 relative">
            Our Story
            <span className="absolute -bottom-2 left-0 w-34 h-1 bg-[#FF003C] rounded-full"></span>
          </h2>
          <p className="text-gray-700 mb-8 text-lg leading-relaxed">
            What started as a small family kitchen soon turned into a pizza haven loved by 
            thousands. At Pepper, we keep it real – authentic flavors, artisanal dough, 
            and the magic of traditional stone-baked pizzas that melt in your mouth.
          </p>

          <h2 className="text-3xl font-bold mb-6 text-gray-900 relative">
            Why Choose Pepper?
            <span className="absolute -bottom-2 left-0 w-76 h-1 bg-[#FF003C] rounded-full"></span>
          </h2>
          <ul className="space-y-4 text-gray-700 text-lg">
            <li className="flex items-center gap-3">
              <span className="text-2xl">🍕</span> Authentic recipes from master chefs
            </li>
            <li className="flex items-center gap-3">
              <span className="text-2xl">🔥</span> Stone-oven baked perfection
            </li>
            <li className="flex items-center gap-3">
              <span className="text-2xl">🥗</span> Farm-fresh toppings every day
            </li>
            <li className="flex items-center gap-3">
              <span className="text-2xl">❤️</span> A cozy space for unforgettable memories
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-20">
        <h3 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-[#FF003C] to-[#ff4d6d] bg-clip-text text-transparent animate-pulse">
          "One bite, and you'll know why we're the best in town."
        </h3>
      </div>
    </section>
  );
};

export default About;
