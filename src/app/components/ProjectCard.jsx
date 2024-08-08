import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="hover:scale-105 transition-all duration-300 w-[18rem] lg:w-80 shadow-md my-2">
      <div
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          // backgroundPosition: "center",
        }}
        className="h-52 md:h-72 rounded-t-xl relative group"
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 gap-4">
          <Link
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white transition-all duration-500"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] hover:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-500" />
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white transition-all duration-500 group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-500" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="text-lg lg:text-xl font-semibold mb-2 truncate">
          {title}
        </h5>
        <p className="text-[#ADB7BE] text-sm lg:text-base truncate">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
