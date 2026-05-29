import React from "react";

const AboutMeSection = () => {
  return (
    <section id="about" className="px-6 py-20">
      <div className="container mx-auto max-w-5xl  space-y-8">
        {/* heading  */}
        <div className="text-center ">
          <h3 className="text-5xl font-bold text-foreground">
            {"<"}
            <span className="text-primary">about</span> me{">"}
          </h3>
          <p> who I am | what I do</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* left col */}
          <div className="space-y-5 my-auto">
            <p className="text-justify">
              MCA graduate focused on becoming a skilled Software Development
              Engineer through consistent learning, problem solving, and
              real-world project building. I specialize in modern web
              development with the MERN stack and actively practice Data
              Structures & Algorithms and competetive programming in various
              platforms to strengthen my fundamentals and problem solving. I
              enjoy building clean, responsive, and user-focused applications
              while continuously improving my coding and development skills.
            </p>
            <div className="flex justify-center gap-5 items-center">
              <a href="" className="cosmic-button">
                Hire me
              </a>
              <a
                href=""
                className="cosmic-button bg-card border-2 text-foreground"
              >
                Resume
              </a>
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
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et,
                  nulla.
                </p>
              </div>
              <div className="border-primary/30 card-box card-hover p-4 text-left">
                <h3 className="text-xl font-bold text-primary">
                  Problem Solving
                </h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et,
                  nulla.
                </p>
              </div>
              <div className="border-primary/30 card-box card-hover p-4 text-left">
                <h3 className="text-xl font-bold text-primary">
                  Competitive Programming
                </h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et,
                  nulla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
