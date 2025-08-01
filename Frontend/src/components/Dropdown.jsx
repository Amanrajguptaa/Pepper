import React, { useState } from 'react'
import { ChevronDown } from "lucide-react";
import DeliveryZones from './DeliveryZones';
const Dropdown = ({data}) => {
    const [click , setClick] = useState(false);


  return (
    <>
      <div>
        <div className="flex items-start justify-between p-7  bg-white rounded-3xl border border-gray-200">
          <h1 className="text-xl font-bold capitalize">{data?.title}</h1>
          <ChevronDown
            size={25}
            className={`transform transition-transform duration-300 ${
              click ? "rotate-180" : "rotate-0"
            }`}
            onClick={() => setClick(!click)}
          />
        </div>
        {click && (
          <div
            className={`transition-transform duration-900 ease-in-out origin-top transform ${
              click ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
            } overflow-hidden`}
          >
            <div className="flex flex-col p-6 -mt-3">
              {data?.descriptions?.map((item, index) => (
                <DeliveryZones key={index} item={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Dropdown