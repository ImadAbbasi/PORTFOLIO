"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4" id="home">
        <motion.div
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondarySecond-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Imad",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "a Web Developer",
                1000,
                "a UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] mb-6 text-base sm:text-lg lg:text-xl capitalize">
            {/* I am a dedicated frontend developer currently in my 8th semester of
            BSCS. My passion lies in crafting beautiful and functional web
            interfaces, ensuring a seamless user experience. I am continually
            enhancing my skills and keeping up with the latest advancements in
            web development to deliver cutting-edge solutions. */}
            {/* I am a frontend developer in my 8th semester of BSCS, focused on
            creating stunning and functional web interfaces while staying
            updated with the latest web development trends. */}
            Turning vision into reality with code and design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-start">
            <a
              href="https://wa.me/923043872195?text=Hi%20Imad,%20I%20would%20like%20to%20discuss%20a%20project%20opportunity."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 mt-2 rounded-full w-full sm:w-fit bg-gradient-to-r from-primary-500 via-secondary-500 to-secondarySecond-500 text-white font-semibold"
            >
              Hire Me
            </a>
            <a
              href="/cv.pdf"
              download
              className="px-1 py-1 inline-block rounded-full w-full sm:w-fit bg-gradient-to-r from-primary-500 via-secondary-500 to-secondarySecond-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 transition duration-300 rounded-full px-5 py-2">
                Download CV
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-5 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero_image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
