import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <span>
      <div className="border flex-1 md:max-w-[500px] w-full rounded-lg">
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
          <span className="border text-sm">Reactjs</span>
        </div>
      </div>
    </span>
  );
};

export default Card;
