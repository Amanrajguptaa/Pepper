import React from "react";
import { Link } from "react-router-dom";

const RelatedProducts = ({ products = [] }) => {
  return (
    <div className="my-10 max-w-6xl mx-auto px-4">
      <h3 className="text-3xl font-bold my-12">You May Also Like</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((item, index) => (
          <Link
            key={index}
            to={`/product/${item.id}`}
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="rounded-3xl overflow-hidden shadow-lg bg-white p-4 border border-gray-200 hover:shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="flex justify-center items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-contain"
                />
              </div>
              <div className="p-4">
                <h2 className="text-gray-800 text-lg font-bold truncate">
                  {item.name}
                </h2>
                <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                  {item.ingredients?.slice(0, 6).join(", ")}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <button className="bg-[#FF003C] text-white px-4 py-2 rounded-full font-semibold hover:bg-red-600 transition ease-in-out">
                    Order Now
                  </button>
                  <span className="text-gray-700 text-lg font-semibold">
                    from{" "}
                    <span className="text-[#FF003C] text-md font-bold">
                      {item.price}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
