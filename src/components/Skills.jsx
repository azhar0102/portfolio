import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import git from "../assets/github.png";
import js from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import python from "../assets/python.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full w-full">
        <div>
          <p>Experience</p>
          <p>These are the technologies I've worked with.</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={html} alt="html-logo" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={css} alt="css-logo" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={js} alt="js-logo" />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={python} alt="python-logo" />
            <p className="my-4">Python</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={react} alt="react-logo" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={tailwind} alt="tailwind-logo" />
            <p className="my-4">Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={git} alt="git-logo" />
            <p className="my-4">Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
