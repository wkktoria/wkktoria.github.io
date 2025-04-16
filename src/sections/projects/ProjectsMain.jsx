import React from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";

const projects = [
  {
    name: "Edux",
    year: "June 2024 - January 2025",
    align: "right",
    image: "https://placedog.net/200/200?random",
    link: "#",
  },
  {
    name: "PageNook",
    year: "November 2024 - Present",
    align: "left",
    image: "https://placedog.net/200/200?random",
    link: "#",
  },
  {
    name: "Game Reviews",
    year: "April 2025",
    align: "right",
    image: "https://placedog.net/200/200?random",
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <ProjectsText />
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((item, index) => {
          return (
            <SingleProject
              key={index}
              name={item.name}
              year={item.year}
              align={item.align}
              image={item.image}
              link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
