import React from 'react'
import LabelCards from './LabelCards'

const LabelledSection = () => {
  return (
    <div className="bg-light-pink flex flex-col py-10 space-y-10 -mt-44">
      <div className="text-center space-y-6">
        <div className="font-bold text-5xl text-gray">Fan Favorites</div>
        <div className="text-xl text-gray">
          From classic combinations to bold flavors, these pizzas top our list
          for a reason.
        </div>
      </div>
      <div className="flex justify-center items-center gap-10 w-full px-8">
        <LabelCards />
        <LabelCards />
        <LabelCards />
        <LabelCards />
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-gray hover:bg-pink-red text-white px-6 py-3 rounded-[50px] text-xl font-bold transition ease-in-out duration-300 cursor-pointer scale-105">
          View full Menu
        </button>
      </div>
    </div>
  );
}

export default LabelledSection
