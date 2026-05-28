import React from "react";
import hero from "../../public/hero11.png";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col md:flex-row justify-around items-center gap-12 lg:gap-24 min-h-screen px-6">
      {/* image */}
      <img
        src={hero}
        className="relative object-cover h-50 w-50 md:h-80 md:w-80 rounded-full border-b border-primary/30 shadow-[0_25px_30px_-12px_rgba(43,192,22,0.35)]"
        alt="arijit karmakar"
      />

      {/* slash */}
      <span className="hidden md:block font-thin text-primary/30 text-[8rem] md:text-[8rem] lg:text-[10rem]">
        {"/"}
      </span>

      {/* intro */}
      <div className="flex flex-col items-center md:items-start md:text-left space-y-2 text-center max-w-2xl">
        <span className="text-2xl">hello world, </span>
        <span className="text-5xl md:text-6xl lg:text-7xl font-extrabold">
          I'm <span className="text-primary">Arijit </span> Karmakar
        </span>
        <p className="text-lg md:text-xl leading-relaxed  text-primary">
          Competitive Programmer | Problem Solving Enthusiast | MERN Stack
          Developer
        </p>
        <a href="#projects" className="w-fit mt-4 cosmic-button">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
