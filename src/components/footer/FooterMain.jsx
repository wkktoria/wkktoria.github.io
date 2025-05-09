import React from "react";
import { links } from "../../constants/links";
import { Link } from "react-scroll";

const FooterMain = () => {
  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>
      <div className="md:flex sm:hidden justify-between mt-4 max-w-[1200px] mx-auto">
        <p className="text-3xl text-lightGrey">wkktoria</p>
        <ul className="flex gap-4 text-lightGrey text-xl">
          {links.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  to={item.section}
                  smooth={true}
                  spy={true}
                  duration={500}
                  offset={-130}
                  className="hover:text-white transition-all duration-500 cursor-pointer"
                >
                  {item.link}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown">
        &copy; 2025 wkktoria
      </p>
    </div>
  );
};

export default FooterMain;
