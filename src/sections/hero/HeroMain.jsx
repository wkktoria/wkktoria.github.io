import React from "react";
import HeroText from "./HeroText";
import HeroPicture from "./HeroPicture";
import HeroGradient from "./HeroGradient";

const HeroMain = () => {
  return (
    <div className="pt-40 pb-16">
      <div className="flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative px-4">
        <HeroText />
        <HeroPicture />
        <HeroGradient />
      </div>
    </div>
  );
};

export default HeroMain;
