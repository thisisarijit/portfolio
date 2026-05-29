import { ExternalLink } from "lucide-react";
import React from "react";
import githubLogo from "../../public/github_logo.png";

const projects = [
  {
    id: 1,
    title: "Foodpark",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore illo nihil aperiam!",
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
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore illo nihil aperiam!",
    image: "/projects/faceRecognition.png",
    tags: ["Python", "OpenCV", "tkinter"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="container max-w-5xl mx-auto space-y-8">
        {/* heading */}
        <div>
          <h3 className="text-foreground text-5xl font-bold">
            {"<"}
            <span className="text-primary">key </span> projects{">"}
          </h3>
          <p>things I build | stuff I code</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div className="group transition-all duration-300 max-w-sm mx-auto bg-card border-primary/50 border">
              <div className="h-48 overflow-hidden ">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 " />
              </div>

              <div className="text-left p-4 space-y-2 flex flex-col">
                <span className="flex justify-center gap-4">
                  {project.tags.map((tag, index) => (
                    <p
                      key={index}
                      className="border border-foreground text-sm px-3 bg-primary-foreground/20 rounded-full"
                    >
                      {tag}
                    </p>
                  ))}
                </span>
                <p className="text-primary text-3xl font-bold">
                  {project.title}
                </p>
                <p className="text-justify">{project.description}</p>
                <div className="flex gap-4">
                  <ExternalLink className="cursor-pointer" />
                  <a href="" className="font-semibold">
                    Github
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
