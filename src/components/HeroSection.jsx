import React, { useState } from "react";
import hero from "../../public/hero11.png";
import githubLogo from "../../public/github_logo.png";
import linkedin_logo from "../../public/linkedin_logo1.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  const imageVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  const fadeVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const [startTyping, setStartTyping] = useState(false);
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="show"
      id="home"
      className="relative flex flex-col md:flex-row justify-around items-center md:gap-12 lg:gap-24 min-h-screen px-6"
    >
      {/* image */}
      <div className="space-y-5 flex flex-col items-center">
        <motion.img
          variants={imageVariants}
          src={hero}
          className="relative object-cover h-40 w-40 md:h-80 md:w-80 rounded-full border-b border-primary/30 shadow-[0_25px_30px_-12px_rgba(43,192,22,0.35)]"
          alt="arijit karmakar"
        />
        <motion.div
          variants={fadeVariants}
          className="border-2 rounded-full flex items-center justify-center gap-2 p-2 w-fit"
        >
          <span className="relative flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex size-3 rounded-full bg-primary"></span>
          </span>
          Available for work
        </motion.div>
      </div>

      {/* slash */}
      <span className="hidden md:block font-thin text-primary/30 text-[8rem] md:text-[8rem] lg:text-[10rem]">
        {"/"}
      </span>

      {/* intro */}
      <div className="flex flex-col items-center md:items-start md:text-left space-y-2 text-center max-w-2xl">
        <motion.span variants={fadeVariants} className="text-2xl">
          hello world,{" "}
        </motion.span>
        <motion.span
          variants={fadeVariants}
          onAnimationComplete={() => setStartTyping(true)}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold"
        >
          I'm <span className="text-primary">Arijit </span> Karmakar
        </motion.span>
        {startTyping && (
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
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.5,
            duration: 0.5,
          }}
          className="flex justify-center mt-5 items-center gap-5"
        >
          <a href="#projects" className="w-fit cosmic-button">
            View My Work
          </a>
          <a
            href="#contact"
            className="cosmic-button bg-card border-2 text-foreground"
          >
            Lets Talk
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
