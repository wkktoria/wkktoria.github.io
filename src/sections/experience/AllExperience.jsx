import React from "react";
import SingleExperience from "./SingleExperience";
import { FaArrowRight } from "react-icons/fa";

const experiences = [
  {
    job: "Student",
    company: "Wyższa Szkoła Biznesu (WSB-NLU) in Nowy Sącz",
    date: "2022 - 2026",
    responsibilities: [
      "Mastering core concepts.",
      "Building practical skills.",
      "Staying current with technology.",
      "Collaborating and networking.",
    ],
  },
  {
    job: "Fullstack Developer Internship",
    company: 'Fundacja na Rzecz Promocji i Rozwoju "Głos Młodych"',
    date: "April 2025 - January 2026",
    responsibilities: [
      "Creation and administration of websites.",
      "Creation, administration of relational databases.",
      "Web application development.",
      "Testing and ensuring the quality of developed software.",
    ],
  },
];

const AllExperience = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < experiences.length - 1 ? (
              <FaArrowRight className="text-6xl text-orange lg:block sm:hidden" />
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperience;
