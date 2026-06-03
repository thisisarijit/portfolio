import { ExternalLink } from "lucide-react";
import React from "react";
import githubLogo from "../../public/github_logo.png";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Foodpark",
    description:
      "Foodpark is a full-featured food ordering platform where users can explore dishes, filter menu items, manage their cart, and complete orders through an interactive checkout process. Focused on responsive design, state management, and user experience.",
    image: "/projects/foodpark.png",
    tags: ["React", "Tailwind"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "YumSecrets",
    description:
      "An API based food recipe finder web application using react. The user can browse through the recipes and display the selected recipe details. The user can also search the recipe from the search bar present at the top of the page. ",
    image: "/projects/yumsecrets.png",
    tags: ["React", "CSS", "REST API"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Face Recognition",
    description:
      "Built a face recognition attendance application using Python, OpenCV, LBPH, and Tkinter. The system captures facial data, recognizes registered users in real time, and maintains attendance records in CSV format through an intuitive GUI.",
    image: "/projects/faceRecognition.png",
    tags: ["Python", "OpenCV", "tkinter"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

const ProjectSection = () => {
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
  const projectsContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const projectCardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: 20,
    },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  return (
    <section id="projects" className="px-6 py-20">
      <div className="container max-w-5xl mx-auto space-y-8">
        {/* heading */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3 className="section-heading">
            {"<"}
            <span className="text-primary">key </span> projects{" />"}
          </h3>
          <p>things I build | stuff I code</p>
        </motion.div>

        <motion.div
          variants={projectsContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectCardVariants}
              transition={{
                duration: 0.2,
              }}
              className="group transition-all duration-300 max-w-sm mx-auto bg-card border-primary/50 border"
            >
              <div className="h-48 overflow-hidden ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 "
                />
              </div>

              <div className="text-left p-4 space-y-2 flex flex-col">
                <span className="flex justify-end gap-2">
                  {project.tags.map((tag, index) => (
                    <p
                      key={index}
                      className="border border-foreground text-sm px-1 bg-primary-foreground/20 rounded-full"
                    >
                      {tag}
                    </p>
                  ))}
                </span>
                <p className="text-primary text-3xl font-bold">
                  {project.title}
                </p>
                <p className="text-justify">{project.description}</p>
                <div className="flex gap-4 items-center">
                  <ExternalLink className="cursor-pointer" />
                  <img
                    src={githubLogo}
                    alt=""
                    className="cursor-pointer bg-border h-8 w-8 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
