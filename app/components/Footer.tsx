import React from "react";
import { GitHubIcon } from "../icons/Github";
import { LinkedInIcon } from "../icons/LinkedIn";
import { XIcon } from "../icons/XIcon";

const Footer = () => {
  return (
    <div className="flex justify-center mt-8 p-8">
      <div className="text-ceneter p-8 text-gray-500 text-sm lg:text-md">
        ©2024 Jesse Beke • All Rights Reserved.
      </div>
      <div className="flex flex-row gap-2">
        <GitHubIcon className="w-10 my-auto text-white" />
        <LinkedInIcon className="w-6 my-auto text-white" />
        <XIcon className="w-5 ml-2 my-auto text-white" />
      </div>
    </div>
  );
};

export default Footer;
