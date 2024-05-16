import React from "react";
import Image from "next/image";
import { GitHubIcon } from "../icons/Github";

//temportary import:
import Quid from "../../public/Quid.svg";
import { Project } from "../data/projects";

interface CardProps {
  project: Project;
}

const Card = ({ project }: CardProps) => {
  return (
    <div className="border border-[#5b5b5b] flex-1 w-full md:max-w-[500px] rounded-lg">
      <Image
        className="rounded-t-lg"
        src={project.imgUrl}
        alt=""
        width="500"
        height="40"
      />
      <div className="p-3 md:p-5">
        <div className="pb-5 flex justify-between items-center">
          <h3 className="text- text-white">{project.projectName}</h3>
          {/* pulse animation */}
          <p className="flex flex-row gap-2 my-auto text-s text-white">
            <span className={`relative flex my-auto justify-center h-3 w-3`}>
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${project.status === 'In-progress'?'bg-yellow-400':'bg-green-400'} opacity-75`}></span>
              <span className={`relative inline-flex rounded-full h-3 w-3 ${project.status === 'In-progress'?'bg-yellow-500':'bg-green-500'}`}></span>
            </span>
            {project.status}
          </p>
        </div>
        <p className="max-w-[500px] text-[#6A6A6A]">
          {project.desc}
        </p>
        <div className="py-5 flex items-center flex-wrap gap-3 overflow-hidden">
          <span className="bg-[#222222] border border-[#5b5b5b] bg-transparent text-white rounded-full px-3 py-1 text-xs">
            Nextjs
          </span>
          <span className="bg-[#222222] border border-[#5b5b5b] bg-transparent text-white rounded-full px-3 py-1 text-xs">
            TypeScript
          </span>
          <span className="bg-[#222222] border border-[#5b5b5b] bg-transparent text-white rounded-full px-3 py-1 text-xs">
            TailwindCSS
          </span>
          <span className="bg-[#222222] border border-[#5b5b5b] bg-transparent text-white rounded-full px-3 py-1 text-xs">
            ButterCMS
          </span>
        </div>
        {/* links */}
        <div className="flex mt-2 items-center gap-3">
          <a target="_blank" href={project.gitLink}>
            <span className="flex flex-row">
              <GitHubIcon className="text-white w-8" />
              <p className="text-white text-sm my-auto">Github</p>
            </span>
          </a>
          <a target="_blank" href={project.link}>
            <span className="flex flex-row">
              <p className="text-white mr-1">&#8599;</p>
              <p className="text-white text-sm my-auto">Link</p>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
