import React from "react";
import c_logo from "../../public/c_logo1.png";
import cpp_logo from "../../public/cpp_logo.png";
import js_logo from "../../public/js_logo.png";
import react_logo from "../../public/react_logo.png";
import vs_logo from "../../public/vsCode_logo.png";
import tailwind_logo from "../../public/tailwind_logo.png";
import github_logo from "../../public/github_logo.png";
import git_logo from "../../public/git_logo.png";
import html_logo from "../../public/html_logo.png";
import css_logo from "../../public/css_logo.png";
import sql_logo from "../../public/sql_logo.png";

const skills = [
  { name: "C", level: "90", logo: c_logo },
  { name: "C++", level: "90", logo: cpp_logo },
  { name: "JavaScript", level: "80", logo: js_logo },
  { name: "React", level: "70", logo: react_logo },
  { name: "HTML", level: "90", logo: html_logo },
  { name: "CSS", level: "90", logo: css_logo },
  { name: "Tailwind CSS", level: "90", logo: tailwind_logo },
  { name: "SQL", level: "80", logo: sql_logo },
  { name: "VS Code", level: "90", logo: vs_logo },
  { name: "GitHub", level: "60", logo: git_logo },
  { name: "Learning...", level: "0" },
  { name: "Learning...", level: "0" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="container mx-auto max-w-5xl space-y-8">
        {/* heading */}
        <div>
          <h3 className="text-5xl font-bold text-foreground">
            {"<"}
            <span className="text-primary">tech </span>
            skills{">"}
          </h3>
          <p>tech I know | tools I use</p>
          <div className="flex justify-around m-5">
            <a href="">All</a>
            <a href="">Languages</a>
            <a href="">Frontend</a>
            <a href="">DB</a>
            <a href="">Tools</a>
          </div>
        </div>

        {/* skills */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className=" p-2 border-2"
            >
              <h3>{skill.name}</h3>
                <img
                  key={index}
                  className="animate-float mx-auto h-15 w-15 md:h-20 md:w-20 hover:scale-110 transition-all duration-300"
                  src={skill.logo}
                  alt={skill.name}
                />
              <div className="my-2 w-full bg-foreground/10 h-2 rounded-full overflow-hidden ">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-grow"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
