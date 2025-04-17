import React from "react";
import { links } from "../../constants/links";
import { Link } from "react-scroll";

const NavbarLinks = () => {
  return (
    <ul className="flex gap-6 text-white font-bold text-center py-4 lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/30 backdrop-blur-lg lg:bg-black sm:w-full">
      {links.map((item, index) => {
        return (
          <li key={index} className="group">
            <Link
              to={item.section}
              smooth={true}
              spy={true}
              duration={500}
              offset={-130}
              className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
            >
              {item.link}
            </Link>
            <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
