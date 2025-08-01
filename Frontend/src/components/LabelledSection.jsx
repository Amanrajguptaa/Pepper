import React from 'react'
import LabelCards from './LabelCards'

const LabelledSection = ({ data }) => {
  return (
    <div className='bg-light-pink flex flex-col py-10 space-y-10 -mt-44 px-6 md:px-0 z-30'>
      <div className='text-center space-y-6 '>
        <div className='font-bold text-3xl sm:text-4xl md:text-5xl text-gray'>Fan Favorites</div>
        <div className='text-lg sm:text-xl text-gray'>
          From classic combinations to bold flavors, these pizzas top our list for a reason.
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto'>
        {data?.map((item, index) => (
          <LabelCards key={index} image={item?.image} />
        ))}
      </div>

      <div className='flex justify-center items-center'>
        <button className='bg-gray hover:bg-pink-red text-white px-6 py-3 rounded-full text-lg sm:text-xl font-bold transition transform duration-300 hover:scale-105'>
          View full Menu
        </button>
      </div>
    </div>
  )
}

export default LabelledSection
