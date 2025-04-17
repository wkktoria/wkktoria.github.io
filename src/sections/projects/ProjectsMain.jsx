import React from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from "../../motion/variants";

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
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ProjectsText />
      </motion.div>
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
