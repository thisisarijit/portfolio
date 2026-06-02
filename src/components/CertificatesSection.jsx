import React from "react";
import { motion } from "framer-motion";

const CertificatesSection = () => {
  const certificates = [
    {
      name: "JavaScript Algorithms and Data Structures",
      path: "/certificates/javascript.png",
      platform: "freeCodeCamp",
      duration: "300 Hours",
      issued: "March 23, 2025",
    },
    {
      name: "Mern Stack Development",
      path: "/certificates/mern_stack.png",
      platform: "EJOB INDIA",
      duration: "4 Months",
      issued: "May 15, 2024",
    },
    {
      name: "Introduction to Industry 4.0 And Industrial Internet of Things",
      path: "/certificates/internet_of_things.png",
      platform: "NPTEL",
      duration: "12 Weeks",
      issued: "October 2024",
    },
    {
      name: "Operating Systems",
      path: "/certificates/operating_system.png",
      platform: "takeUforward",
      duration: "",
      issued: "November 21, 2025",
    },
    {
      name: "Object Oriented Programming",
      path: "/certificates/oop.png",
      platform: "takeUforward",
      duration: "",
      issued: "Sept 10, 2025",
    },
  ];

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
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  const cardVariants = {
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
    <section id="certificates" className="px-6 py-20">
      <div className="container mx-auto max-w-5xl space-y-8">
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3 className="text-5xl font-bold text-foreground">
            {"<"}
            <span className="text-primary">verified</span> skills{"/>"}
          </h3>
          <p>learning journey | verified skills</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {certificates.map((certificate, index) => (
            <motion.div
              variants={cardVariants}
              whileHover={{
                y: -5,
                scale: 1.03,
              }}
              transition={{
                duration: 0.2,
              }}
              key={index}
              className="bg-border/50 text-left px-5 py-2 border-2 flex flex-col"
            >
              <h3 className="text-2xl text-primary font-bold">
                {certificate.name}
              </h3>
              <div className="flex justify-between font-extralight grow">
                <p>{certificate.platform}</p>
                <p>{certificate.duration}</p>
              </div>
              <div className="h-px bg-foreground mt-5"></div>
              <span className="flex justify-between items-center">
                <p>{certificate.issued}</p>
                <a
                  href={certificate.path}
                  target="_blank"
                  className="cosmic-button mt-2"
                >
                  View
                </a>
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificatesSection;
