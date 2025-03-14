import React from "react";
import { GitHubIcon } from "../icons/Github";
import { LinkedInIcon } from "../icons/LinkedIn";
import { XIcon } from "../icons/XIcon";

// work on footer
// use this https://dribbble.com/shots/23531329-kawsar-design-2024
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex justify-center mt-10 p-4">
      <div className="text-ceneter p-4 text-gray-500 text-sm lg:text-md">
        ©{currentYear} Jesse Beke • All Rights Reserved.
      </div>
      <div className="hidden flex-row gap-2">
        <GitHubIcon className="w-10 my-auto text-white" />
        <LinkedInIcon className="w-6 my-auto text-white" />
        <XIcon className="w-5 ml-2 my-auto text-white" />
      </div>
    </div>
  );
};

export default Footer;
