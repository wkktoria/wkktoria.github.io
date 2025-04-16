import React from "react";

const SingleExperience = ({ experience }) => {
  return (
    <div className="md:h-[410px] md:w-[240px] sm:h-auto sm:w-full border-2 border-orange border-dashed rounded-2xl mt-12 p-4">
      <p className="font-bold text-cyan">{experience.job}</p>
      <p className="text-orange">{experience.company}</p>
      <p className="text-lightGrey">{experience.date}</p>
      <ul className="list-disc mt-4 pl-4 text-white">
        {experience.responsibilities.map((responsibility, index) => {
          return <li key={index}>{responsibility}</li>;
        })}
      </ul>
    </div>
  );
};

export default SingleExperience;
