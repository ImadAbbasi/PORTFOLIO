"use client";
import Image from "next/image";
import React, { useState, useTransition, useRef } from "react";
import TabButton from "./TabButton";
import { motion, useInView } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="flex flex-col gap-1 list-disc pl-3">
        <li className="text-xs md:text-sm">HTML</li>
        <li className="text-xs md:text-sm">CSS</li>
        <li className="text-xs md:text-sm">JAVASCRIPT</li>
        <li className="text-xs md:text-sm">TAILWIND CSS</li>
        <li className="text-xs md:text-sm">REACT JS</li>
        <li className="text-xs md:text-sm">NEXT JS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="flex flex-col gap-1 list-disc pl-3">
        <li className="text-xs md:text-sm">
          MATRICULATION: The Crescent Academy
        </li>
        <li className="text-xs md:text-sm">
          INTERMEDIATE: Government Delhi College
        </li>
        <li className="text-xs md:text-sm">
          BSCS: The Federal Urdu University of Arts, Science and Technology
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certification",
    content: (
      <ul className="flex flex-col gap-1 list-disc pl-3">
        <li className="text-xs md:text-sm">
          Web App Development From SAYLANI Mass IT Program
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransiton] = useTransition();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const aboutVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const handleTabChange = (id) => {
    startTransiton(() => {
      setTab(id);
    });
  };

  return (
    <section
      id="about"
      ref={ref}
      className="text-white flex flex-col justify-center items-center"
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={aboutVariants}
        transition={{ duration: 0.5 }}
        className="md:grid md:grid-cols-2 gap-8 xl:gap-16 items-center py-8 px-4 sm:py-16 xl:py-16"
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/about_image.png"
            alt="about image"
            className=""
            width={450}
            height={450}
          />
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0, display: "none" }}
          animate={{ x: 0, opacity: 1, display: "block" }}
          transition={{ duration: 0.5 }}
          className="mt-4 md:mt-0 text-left flex flex-col h-full"
        >
          <h2 className="text-4xl font-bold mt-4 text-white mb-4">About Me</h2>
          <p className="text-slate-200 text-base lg:text-lg">
            Self-motivated and hardworking fresher seeking for an opportunity to
            work in a challenging environment to gain skills and utilize my
            knowledge & intelligence in the growth of the organization.
          </p>
          <div className="flex flex-row mt-5 gap-4">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certification")}
              active={tab === "certification"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
