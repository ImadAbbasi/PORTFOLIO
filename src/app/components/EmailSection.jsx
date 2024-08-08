"use client";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const EmailSection = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const emailVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = formRef.current;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        // Form submission successful, reset the form
        form.reset();
        setFormData({
          email: "",
          subject: "",
          message: "",
        });
        // alert("Message sent successfully!");
        setEmailSubmitted(true);
      } else {
        // Handle errors here
        alert("Failed to send message. Please try again.");
        setEmailSubmitted(false);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred while sending the message. Please try again.");
    }
  };

  return (
    <motion.div
      id="contact"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={emailVariants}
      transition={{ duration: 0.5 }}
      className="mt-14"
    >
      <hr className="md:w-[30rem] md:mx-auto" />
      <h3 className="text-white text-4xl text-center font-bold mt-12">
        Contact Me
      </h3>
      <div className="grid md:grid-cols-2 mb-12 py-24 gap-4 relative">
        {/* <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 left-24 transform -translate-x-1/2 -translate-y-1/2"></div> */}
        <div className="z-10">
          <h4 className="text-xl font-bold text-white my-2">
            Let&apos;s Connect
          </h4>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            I&apos;m currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
          </p>
          <div className="socials flex flex-row gap-2">
            <Link
              href="https://github.com/ImadAbbasi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={GithubIcon} alt="Github Icon" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/madi20/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={LinkedinIcon} alt="Github Icon" />
            </Link>
          </div>
        </div>

        <div>
          <form
            className="flex flex-col gap-6"
            action="https://formspree.io/f/xovadyrv"
            method="POST"
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="example@example.com"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="text-white block mb-2 text-sm font-medium"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                required
                placeholder="just saying hi"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-white block mb-2 text-sm font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                placeholder="type a message..."
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
            </div>
            <input
              type="submit"
              className="bg-gradient-to-r from-primary-500 via-secondary-500 to-secondarySecond-500 hover:scale-105 transition-all duration-300 text-white font-medium py-2.5 px-5 rounded-lg w-full"
              value="Send Message"
            />
            {emailSubmitted && (
              <p className="text-green-500 text-sm mt-2">
                Email Sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default EmailSection;
