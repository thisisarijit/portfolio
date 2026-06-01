import React from "react";

const AboutMeSection = () => {
  return (
    <section id="about" className="px-6 py-20">
      <div className="container mx-auto max-w-5xl  space-y-8">
        {/* heading  */}
        <div className="text-center ">
          <h3 className="text-5xl font-bold text-foreground">
            {"<"}
            <span className="text-primary">about</span> me{" />"}
          </h3>
          <p> who I am | what I do</p>
        </div>
        <p className="max-w-3xl mx-auto text-center text-muted-foreground leading-relaxed">
          MCA graduate focused on becoming a skilled Software Development
          Engineer through consistent learning, problem solving, and real-world
          project building. I specialize in modern web development with the MERN
          stack and actively practice Data Structures & Algorithms and
          competetive programming in various platforms to strengthen my
          fundamentals and problem solving. I enjoy building clean, responsive,
          and user-focused applications while continuously improving my coding
          and development skills.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {/* left col */}
          <div className="relative pl-9">
            {/* vertical Line */}
            <div className="absolute left-3 top-2 bottom-2 w-px bg-primary/40"></div>

            <div className="space-y-10">
              <div className="relative">
                <div className="absolute -left-8 top-2 h-4 w-4 rounded-full bg-primary border-4 border-background" />
                <h3 className="text-xl font-bold text-primary">
                  Master of Computer Applications
                </h3>
                <p className="text-sm text-muted-foreground">2019 - 2022</p>
                <p>CGPA: 7.70</p>
                <p className="text-muted-foreground">
                  Future Institute of Engineering & Management
                </p>
                <p className="text-xl text-muted-foreground"></p>
              </div>

              <div className="relative">
                <div className="absolute -left-8 top-2 h-4 w-4 rounded-full bg-primary border-4 border-background" />
                <h3 className="text-xl font-bold text-primary">
                  Bachelor of Computer Applications
                </h3>
                <p className="text-sm text-muted-foreground">2019 - 2022</p>
                <p>CGPA: 9.31</p>
                <p className="text-muted-foreground">Raghunathpur College</p>
              </div>
            </div>
          </div>

          {/* right col */}
          <div>
            <div className="space-y-4">
              <div className="border-primary/50 card-box card-hover p-4 text-left">
                <h3 className="text-xl font-bold text-primary">
                  UI/UX Development
                </h3>
                <p>
                  Building modern, responsive, and user-friendly web interfaces
                  with a focus on accessibility, performance, and intuitive user
                  experiences.
                </p>
              </div>
              <div className="border-primary/30 card-box card-hover p-4 text-left">
                <h3 className="text-xl font-bold text-primary">
                  Problem Solving
                </h3>
                <p>
                  Strengthening analytical thinking through Data Structures and
                  Algorithms, with a focus on writing efficient and optimized
                  solutions.
                </p>
              </div>
              <div className="border-primary/30 card-box card-hover p-4 text-left">
                <h3 className="text-xl font-bold text-primary">
                  Competitive Programming
                </h3>
                <p>
                  Regularly practicing coding challenges and contests to improve
                  logical reasoning, coding speed, and problem-solving skills.
                </p>
              </div>
            </div>
          </div>
        </div>
        <a href="" className="cosmic-button">
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default AboutMeSection;
