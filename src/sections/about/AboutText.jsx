import React from "react";
import { Link } from "react-scroll";

const AboutText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white">
        I'm Wiktoria, a student with a passion for building innovative solutions
        and a drive to become a skilled full-stack developer. With a curious
        mind and a love for learning, I'm constantly seeking out new challenges
        and opportunities to grow as a programmer.
      </p>
      <Link
        to="projects"
        smooth={true}
        spy={true}
        duration={500}
        offset={-130}
        className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan"
      >
        My Projects
      </Link>
    </div>
  );
};

export default AboutText;
