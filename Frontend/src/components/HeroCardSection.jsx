import React from "react";
import HeroCard from "./HeroCard";

const HeroCardSection = () => {
  return (
    <div className="mt-20 px-6 md:px-0 max-w-6xl mx-auto w-full">
      <div className="text flex flex-col items-center gap-6 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold">Hot Pizza, Hotter Deals</h1>
        <p className="text-lg sm:text-2xl">
          From family-sized deals to solo slices, find the perfect offer for your pizza cravings.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <HeroCard
          title="Spicy Duo Deal"
          items={["1 Medium Firecracker Inferno", "1 Medium Buffalo Bliss"]}
          price="$21.99 - Save $4"
          images={["/assets/heroPizza.png", "/assets/garlicPizza.png"]}
          bgcolor={"bg-pink-red"}
        />
        <HeroCard
          title="Cheesy Feast"
          items={["1 Large Cheese Lovers", "1 Large Garlic Delight"]}
          price="$19.99 - Save $5"
          images={["/assets/heroPizza.png", "/assets/garlicPizza.png"]}
          bgcolor={"bg-yellow"}
        />
      </div>

      <div className="flex flex-col max-h-[480px] md:max-h-[550px] bg-gray rounded-3xl shadow-md overflow-hidden my-7 px-10 py-5 md:px-16 md:py-10">
        <div className="w-full flex flex-col gap-6 items-start">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Spicy Duo Deal</h1>
          <ul className="list-disc text-white space-y-2">
            <li className="text-lg sm:text-xl">1 Medium Firecracker Inferno</li>
            <li className="text-lg sm:text-xl">1 Medium Buffalo Bliss</li>
          </ul>
          <div className="flex justify-between items-center w-full mt-4">
            <button className="px-4 py-2 bg-white rounded-full text-base sm:text-lg font-bold">
              Order Now
            </button>
            <span className="text-lg sm:text-xl text-white">$21.99 - Save $4</span>
          </div>
        </div>
        <div className="flex justify-center items-center mt-15 md:mt-0 w-full">
          <img src="/assets/heroPizza.png" className="scale-150 md:scale-100 md:w-[80%] mx-5 md:-mx-32" alt="Pizza" />
          <img src="/assets/heroPizza.png" className="scale-150 md:scale-100 md:w-[80%] mx-5 md:-mx-32" alt="Pizza" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
        <HeroCard
          title="Pepperoni Special"
          items={["2 Large Pepperoni Pizzas", "1 Large Margherita"]}
          price="$25.99 - Save $6"
          images={["/assets/heroPizza.png", "/assets/garlicPizza.png"]}
          bgcolor={"bg-green"}
        />
        <HeroCard
          title="Veggie Delight"
          items={["1 Large Veggie Supreme", "1 Large Margherita"]}
          price="$18.99 - Save $3"
          images={["/assets/heroPizza.png", "/assets/garlicPizza.png"]}
          bgcolor={"bg-orange"}
        />
      </div>
    </div>
  );
};

export default HeroCardSection;
