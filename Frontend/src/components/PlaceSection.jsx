import React from "react";
import PlaceCard from "./PlaceCard";

const PlaceSection = () => {
  return (
    <>
      <div className="bg-slate-50 py-10">
        <div className="animcard-cont flex justify-center items-center flex-col ">
          <div className="text-center px-6 md:px-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-5 space-x-0.5">
              Find Your Nearest Pizza Spot
            </h1>
            <p className=" text-sm md:text-lg mb-16 ">
              Locate our stores, check delivery zones, and pick the best option
              for you!
            </p>
          </div>
          <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:flex justify-between items-center px-6 md:px-0 gap-5 max-w-6xl mx-auto">
            <PlaceCard
              title="New Delhi"
              color="rgba(255, 0, 59, 0.5)"
              img="https://images.unsplash.com/photo-1617688319108-cb3bdc88f587?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5ldyUyMHlvcmslMjBjaXR5fGVufDB8fDB8fHww"
            />
            <PlaceCard
              title="Mumbai"
              color="rgba(255, 204, 0, 0.5)"
              img="https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bG9uZG9ufGVufDB8fDB8fHww"
            />
            <PlaceCard
              title="Bengaluru"
              color="rgba(10, 153, 0, 0.5)"
              img="https://images.unsplash.com/photo-1617688319108-cb3bdc88f587?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5ldyUyMHlvcmslMjBjaXR5fGVufDB8fDB8fHww"
            />
            <PlaceCard
              title="Hyderabad"
              color="rgba(51, 51, 51, 0.5)"
              img="https://images.unsplash.com/photo-1617688319108-cb3bdc88f587?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5ldyUyMHlvcmslMjBjaXR5fGVufDB8fDB8fHww"
            />
            <PlaceCard
              title="Kolkata"
              color="rgba(255, 145, 0, 0.5)"
              img="https://images.unsplash.com/photo-1617688319108-cb3bdc88f587?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5ldyUyMHlvcmslMjBjaXR5fGVufDB8fDB8fHww"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceSection;
