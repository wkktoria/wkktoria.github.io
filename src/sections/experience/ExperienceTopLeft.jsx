import React from "react";
import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2023
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="1+" text="YEAR" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number={8} text="Projects" />
      </div>
      <p className="text-center text-white">
        Developing interactive and user-friendly web applications through
        personal projects and practical learning experiences.
      </p>
      <ExperienceInfo number="8+" text="Skills" />
    </div>
  );
};

export default ExperienceTopLeft;
