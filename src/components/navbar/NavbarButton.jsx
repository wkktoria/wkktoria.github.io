import React from "react";
import { LuArrowDownRight } from "react-icons/lu";
import { Link } from "react-scroll";

const NavbarButton = () => {
  return (
    <Link
      to="contact"
      smooth={true}
      spy={true}
      duration={500}
      offset={-130}
      className="px-4 py-2 rounded-full text-xl font-bold text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-cyan"
    >
      Hire Me
      <div className="sm:hidden md:block">
        <LuArrowDownRight />
      </div>
    </Link>
  );
};

export default NavbarButton;
