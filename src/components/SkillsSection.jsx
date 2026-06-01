import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "C", level: "90", logo: "../../public/c_logo1.png" },
  { name: "C++", level: "90", logo: "../../public/cpp_logo.png" },
  { name: "JavaScript", level: "80", logo: "../../public/js_logo.png" },
  { name: "React", level: "70", logo: "../../public/react_logo.png" },
  { name: "HTML", level: "90", logo: "../../public/html_logo.png" },
  { name: "CSS", level: "90", logo: "../../public/css_logo.png" },
  { name: "Tailwind CSS", level: "90", logo: "../../public/tailwind_logo.png" },
  { name: "SQL", level: "80", logo: "../../public/sql_logo.png" },
  { name: "VS Code", level: "90", logo: "../../public/vsCode_logo.png" },
  { name: "GitHub", level: "60", logo: "../../public/git_logo.png" },
  { name: "Learning...", level: "0" },
  { name: "Learning...", level: "0" },
];

const SkillsSection = () => {
  const headingVariants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  const skillsContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  const skillVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <section id="skills" className="px-6 py-20">
      <div className="container mx-auto max-w-5xl space-y-8">
        {/* heading */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3 className="text-5xl font-bold text-foreground">
            {"<"}
            <span className="text-primary">tech </span>
            skills{" />"}
          </h3>
          <p>tech I know | tools I use</p>
        </motion.div>

        {/* skills */}
        <motion.div
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5"
          variants={skillsContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className=" p-2 border-2"
              variants={skillVariants}
              whileHover={{
                y: -5,
                scale: 1.03,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              <h3>{skill.name}</h3>
              <img
                key={index}
                className="animate-float mx-auto h-15 w-15 md:h-20 md:w-20 hover:scale-110 transition-all duration-300"
                src={skill.logo}
                alt={skill.name}
              />
              <div className="my-2 w-full bg-foreground/10 h-2 rounded-full overflow-hidden ">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.2,
                    delay: index * 0.15,
                  }}
                  className="bg-primary  rounded-full h-full"
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
