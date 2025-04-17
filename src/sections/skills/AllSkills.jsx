import React from "react";
import { skills } from "../../constants/skills";
import SingleSkill from "./SingleSkill";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from "../../motion/variants";

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              key={index}
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
            >
              <SingleSkill text={item.skill} imgSvg={<item.icon />} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
