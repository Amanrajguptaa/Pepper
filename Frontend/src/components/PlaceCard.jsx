import React from "react";
import { ArrowRight } from "lucide-react";

const PlaceCard = ({ title, color, img }) => {
  return (
    <div className="container w-[150px] h-[150px] md:w-[220px] md:h-[220px] relative rounded-3xl overflow-hidden group">
      <div className="imgdiv w-full h-full relative bg-cover bg-center">
        <img
          className="w-full h-full  absolute top-0 left-0  group-hover:scale-120 transition-all duration-400"
          src={img}
          alt="Card"
        />
        <div
          className={`absolute inset-0`}
          style={{ backgroundColor: `${color}` }}
        ></div>
      </div>
      <div className="textdiv absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className=" text-xl md:text-3xl text-white font-bold whitespace-nowrap capitalize">
          {title}
        </h1>
      </div>
      <div className="absolute bottom-[-50px] left-0 w-full flex justify-center items-center transition-all duration-400 group-hover:bottom-4 opacity-0 group-hover:opacity-100">
        <button className="px-3 py-1 bg-white text-black rounded-3xl flex  items-center gap-1">
          View More
          <ArrowRight
            size={16}
            className="rotate-60 group-hover:-rotate-60 transition-transform duration-600 delay-120"
          />
        </button>
      </div>
    </div>
  );
};

export default PlaceCard;
