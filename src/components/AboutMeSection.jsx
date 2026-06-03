import { motion } from "framer-motion";
import { Download, FileDown, FileDownIcon } from "lucide-react";
import React from "react";

const AboutMeSection = () => {
  const fadeVariants = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
      },
    },
  };
  const timelineVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };
  const cardsVariants = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };
  return (
    <section id="about" className="px-6 py-20">
      <div className="container mx-auto max-w-5xl space-y-8">
        {/* heading  */}
        <motion.div
          className="text-center"
          variants={fadeVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3 className="section-heading">
            {"<"}
            <span className="text-primary">about</span> me{" />"}
          </h3>
          <p> who I am | what I do</p>
        </motion.div>
        <motion.p
          className="max-w-3xl mx-auto text-center text-muted-foreground leading-relaxed"
          variants={fadeVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          MCA graduate passionate about software development and problem
          solving. I build web applications using the MERN stack and
          continuously improve my skills through DSA, competitive programming,
          and hands-on projects.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-4">
          {/* left col */}
          <motion.div
            className="relative pl-9"
            variants={timelineVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
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
          </motion.div>

          {/* right col */}
          <div>
            <motion.div
              className="space-y-4"
              variants={cardsVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
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
            </motion.div>
          </div>
        </div>
        <a
          href="/Arijit_Karmakar_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="cosmic-button flex justify-center gap-2 w-fit mx-auto"
        >
          Download Resume <Download />
        </a>
      </div>
    </section>
  );
};

export default AboutMeSection;
