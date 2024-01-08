import React from "react";

const Home = () => {
  return (
    <div className="h-screen w-full bg-[#0a192f]">
      <div className="max-w-[1000px] h-full mx-auto px-8 flex flex-col justify-center">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Azhar Shaik
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Front-End Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am a passionate front-end developer dedicated to crafting
          exceptional user experiences and bringing design concepts to life.
        </p>
      </div>
    </div>
  );
};

export default Home;
