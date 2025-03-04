import React from "react";
import { motion } from "motion/react";
const HeroSection = () => {
  return (
    <div className="max-h-screen w-full flex justify-center items-start relative mt-20 mb-40">
      <motion.img
      initial={{
          scale: 0.5,
          opacity: 0,
          y: -200,
        }}
        animate={{
          scale: 1,
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        className="absolute inset-0 h-32 -top-20 left-30"
        src="/assets/mushroom.png"
        alt=""
      />
      <motion.img
      initial={{
          scale: 0.5,
          opacity: 0,
          x: -200,
        }}
        animate={{
          scale: 1,
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      
        className="absolute inset-0 h-32 left-5 top-16"
        src="/assets/leaf1.png"
        alt=""
      />
      <motion.img
      initial={{
          scale: 0.5,
          opacity: 0,
          y: -200,
        }}
        animate={{
          scale: 1,
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      
        className="absolute inset-0 h-32 left-44 top-32"
        src="/assets/olive.png"
        alt=""
      />
      <motion.img
      initial={{
          scale: 0.5,
          opacity: 0,
          x: -200,
        }}
        animate={{
          scale: 1,
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      
        className="absolute inset-0 h-32 left-72 top-60"
        src="/assets/chilli.png"
        alt=""
      />
      <motion.img
      initial={{
          scale: 0.5,
          opacity: 0,
          y: -200,
        }}
        animate={{
          scale: 1,
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      
        className="absolute inset-0 h-32 left-5 top-80"
        src="/assets/tomato2.png"
        alt=""
      />
      <div className="-z-50 -mt-10">
      <motion.div
        initial={{
          scale: 0.5,
          opacity: 0,
          z: -200,
        }}
        animate={{
          scale: 1,
          opacity: 1,
          z: 0,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        style={{
          perspective: 1000,
        }}
        className="flex-col  space-y-6 w-full overflow-hidden"
      >
        <div className="text-center text-gray text-8xl leading-22 font-bold">
          Your Pizza Party
          <br />
          Starts Here!
        </div>
        <div className="text-center text-xl">
          Gather your friends and family and enjoy the best pizza in town.
          <br /> Freshly made and delivered hot!
        </div>
        <div className="w-full flex justify-center items-center">
          <button className="bg-pink-red py-4 px-8 rounded-[50px]  text-white text-xl font-bold">
            View Our Menu
          </button>
        </div>
        
      </motion.div>
      <motion.div
       initial={{
        opacity: 0,
        rotate:-100
      }}
      animate={{
        opacity: 1,
        rotate:0
      }}
      transition={{
        duration: 1.0,
        ease: "easeInOut",
      }}
         className="flex justify-center items-center -mt-8">
          <img
           className="relative" src="/assets/heroPizza.png" alt="" />
        </motion.div>
        </div>
      <motion.img
      initial={{
          scale: 0.5,
          opacity: 0,
          x: 200,
        }}
        animate={{
          scale: 1,
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      
        className="absolute h-32 -top-20 right-32"
        src="/assets/olive2.png"
        alt=""
      />
      <motion.img
      initial={{
          scale: 0.5,
          opacity: 0,
          y: -200,
        }}
        animate={{
          scale: 1,
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      
        className="absolute h-32  right-5 top-16 "
        src="/assets/tomato.png"
        alt=""
      />
      <motion.img
      initial={{
          scale: 0.5,
          opacity: 0,
          x: 300,
        }}
        animate={{
          scale: 1,
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      
        className="absolute h-32 right-40 top-36"
        src="/assets/mushroom2.png"
        alt=""
      />
      <motion.img
      initial={{
          scale: 0.5,
          opacity: 0,
          y: -200,
        }}
        animate={{
          scale: 1,
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      
        className="absolute h-32 right-72 top-68"
        src="/assets/garlic.png"
        alt=""
      />
      <motion.img
      initial={{
          scale: 0.5,
          opacity: 0,
          y: 200,
        }}
        animate={{
          scale: 1,
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      
        className="absolute h-32 right-5 top-80"
        src="/assets/leaf2.png"
        alt=""
      />
    </div>
  );
};

export default HeroSection;
