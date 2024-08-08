"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { animate, motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Text Utils",
    description: "Everyday Use Text Utilities Using ReactJS.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ImadAbbasi/TextUtils-React",
    previewUrl: "https://imadabbasi.github.io/TextUtils-React/",
  },
  {
    id: 2,
    title: "Social Medai App",
    description: "Social Media App Using Sanity.io As Backend",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ImadAbbasi/Social-Media-App",
    previewUrl: "https://lets-us-connect.netlify.app/login",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "E-commerce Application Using ReactJS",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ImadAbbasi/react-myStore",
    previewUrl: "https://madis-store.netlify.app/",
  },
  {
    id: 4,
    title: "Personal Portfolio",
    description: "Portfolio Using NextJS And Framer Motion For Animation",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "#",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filterProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-white text-4xl mb-8 text-center font-bold">
        My Projects
      </h2>
      <div className="text-white flex flex-row gap-2 justify-center items-center py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul
        ref={ref}
        className="flex flex-wrap gap-8 justify-center items-center"
      >
        {filterProjects.length > 0 ? (
          filterProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                previewUrl={project.previewUrl}
                gitUrl={project.gitUrl}
                tags={project}
              />
            </motion.li>
          ))
        ) : (
          <motion.div
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-white text-xl mt-4">
              Sorry, no projects yet.😢
            </h2>
          </motion.div>
        )}
      </ul>
    </section>
  );
};

export default ProjectsSection;
