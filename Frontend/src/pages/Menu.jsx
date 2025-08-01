import React, { useState } from "react";
import { menuData } from "../data/menuData.js";

const menuCategories = [
  { name: "All", image: "https://framerusercontent.com/images/QlVQ0YNHzBhb2nPfKPz2btr7A.png?scale-down-to=1024" },
  { name: "Pizza", image: "https://framerusercontent.com/images/z0tpcmuGY42myUTNyLF9LCXg.png" },
  { name: "Pasta", image: "https://framerusercontent.com/images/2c91DIhm8wc9cAbmFFUBzc7ZAg.png" },
  { name: "Sides", image: "https://framerusercontent.com/images/jiKYTXVS1dGzHHn9InYt6POHbT4.png?scale-down-to=1024" },
  { name: "Desserts", image: "https://framerusercontent.com/images/pRzalLce4KvcQSggYuXBvUC174.png" },
  { name: "Drinks", image: "https://framerusercontent.com/images/pP3gKt2J5BBczlpi1XsyafZRBo.png?scale-down-to=1024" },
];

const Menu = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedCategory = menuCategories[selectedIndex].name;

  const filteredMenu =
    selectedCategory === "All"
      ? menuData
      : menuData.filter((item) => item.category === selectedCategory);

  return (
    <div className="px-6 md:px-0 py-10 max-w-6xl mx-auto">
      <div>
        <h1 className="text-6xl font-extrabold text-gray-900">{selectedCategory == "All" ? "Our Menu" : selectedCategory}</h1>
        <p className="text-lg text-gray-600 mt-6">
          From savory pizzas to refreshing drinks, every dish is made with love
          and quality ingredients.
        </p>
      </div>

      <div className="grid grid-cols-2 md:flex flex-wrap justify-start items-center mt-10 gap-6">
        {menuCategories.map((category, index) => {
          const isSelected = index === selectedIndex;

          return (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`cursor-pointer flex items-center gap-1 md:gap-4 px-4 py-1 rounded-full border transition-all duration-300 
              ${isSelected ? "bg-[#FF003B] text-white border-black" : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}`}
            >
              <img className="h-10 w-10 pointer-events-none" src={category.image} alt={category.name} />
              <span className="text-lg font-medium">{category.name}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-14 space-y-10">
        {filteredMenu.map((item, index) => (
          <div key={index} className="border-b-2 border-dashed pb-10">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-80 h-80 object-contain pointer-events-none"
              />

              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900">{item.name}</h2>

                <p className="mt-2 text-sm text-gray-600">
                  <span className="font-semibold">Ingredients:</span>{" "}
                  {item.ingredients?.join(", ")}
                </p>

                {item.nutritionalInfo && (
                  <div className="mt-2 text-sm text-gray-600">
                    <span className="font-semibold">Nutritional Info:</span>
                    <ul className="ml-5 list-disc">
                      <li>Calories: {item.nutritionalInfo.Calories}</li>
                      <li>Fat: {item.nutritionalInfo.Fat}</li>
                      <li>Carbohydrates: {item.nutritionalInfo.Carbohydrates}</li>
                      <li>Protein: {item.nutritionalInfo.Protein}</li>
                    </ul>
                  </div>
                )}

                <p className="mt-2 text-sm text-gray-600">
                  <span className="font-semibold">Allergens:</span> {item.allergens || "None"}
                </p>

                <div className="flex justify-between items-center">
                <button className="mt-4 bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition cursor-pointer">
                  Order Now
                </button>
                

              <div className="flex flex-col">
                <p className="text-sm text-gray-500">from</p>
                <p className="text-lg font-semibold text-gray-800">
                  {item.price}
                </p>
              </div>
</div>
              </div>

              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
