import React from "react";
import Image from "next/image";
import { GitHubIcon } from "../icons/Github";

const Card = () => {
  return (
    <span>
      <div className="border border-[#e5e7eb] flex-1 md:max-w-[500px] w-full rounded-lg">
        <Image src="" alt="" width="500" height="40" />
        <div className="p-3 md:p-5">
          <div className="pb-5 flex justify-between items-center">
            <h3 className="text- text-white">Draft</h3>
            {/* pulse animation */}
            <p className="flex flex-row gap-2 my-auto text-s text-white">
              <span className="relative flex my-auto justify-center h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
              </span>
              In-progress
            </p>
          </div>
          <p className="max-w-[500px] text-[#6A6A6A]">
            Scribble is your go-to community space where developers can share
            and learn from high-quality tech and programming articles or even
            start their own blog.
          </p>
          <div className="py-5 flex items-center flex-wrap gap-1 overflow-hidden">
            <span className="bg-[#222222] border bg-transparent text-white rounded-full px-3 py-1 text-xs">
              Reactjs
            </span>
          </div>
          {/* links */}
          <div className="flex mt-2 items-center gap-5">
            <a href="">
              <span className="flex flex-row">
                <GitHubIcon className="text-white w-8" />
                <p className="text-white text-sm my-auto">Github</p>
              </span>
            </a>
          </div>
        </div>
      </div>
    </span>
  );
};

export default Card;
