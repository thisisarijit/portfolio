import React from "react";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col md:flex-row justify-around items-center gap-12 lg:gap-24 min-h-screen px-6 py-20">
      {/* image */}
      <div className="relative">
        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />

        <img
          src=""
          className="relative object-cover h-64 w-64 md:h-80 md:w-80 rounded-full border border-primary/30 shadow-[0_25px_50px_-12px_rgba(43,192,22,0.35)]"
          alt="arijit karmakar"
        />
      </div>

      {/* slash */}
      <span className="hidden md:block font-thin text-primary/30 text-[8rem] md:text-[8rem] lg:text-[10rem]">
        {"/"}
      </span>

      {/* intro */}
      <div className="space-y-6 text-center lg:text-left max-w-2xl">
        <span className="font-space-grotesk text-5xl md:text-6xl lg:text-7xl font-extrabold ">
          Hi, I'm <span className="text-primary">Arijit </span> Karmakar
        </span>
        <h1 className="text-lg leading-relaxed tracking-widest text-primary">
          Competitive Programmer | Problem Solving Enthusiast | MERN Stack
          Developer
        </h1>
        <a href="#projects" className="cosmic-button">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
