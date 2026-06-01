import React from "react";
import hero from "../../public/hero11.png";
import githubLogo from "../../public/github_logo.png";
import linkedin_logo from "../../public/linkedin_logo1.png";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row justify-around items-center gap-12 lg:gap-24 min-h-screen px-6"
    >
      {/* image */}
      <div className="space-y-5 flex flex-col items-center">
        <img
          src={hero}
          className="relative object-cover h-50 w-50 md:h-80 md:w-80 rounded-full border-b border-primary/30 shadow-[0_25px_30px_-12px_rgba(43,192,22,0.35)]"
          alt="arijit karmakar"
        />
        <div className="border-2 rounded-full flex items-center justify-center gap-2 p-2 w-fit">
          <span class="relative flex size-3">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
            <span class="relative inline-flex size-3 rounded-full bg-primary"></span>
          </span>
          Available for work
        </div>
      </div>

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

        <TypeAnimation
          sequence={[
            "competitive programmer",
            500,
            "problem solving enthusisast",
            500,
            "MERN stack developer",
            500,
          ]}
          speed={20}
          repeat={Infinity}
          className="text-primary text-2xl font-medium"
        />
        <div className="flex justify-center mt-5 items-center gap-5">
          <a href="#projects" className="w-fit cosmic-button">
            View My Work
          </a>
          <a
            href="#contact"
            className="cosmic-button bg-card border-2 text-foreground"
          >
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
