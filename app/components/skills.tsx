import React from "react";
import { ReactIcon } from "../icons/ReactIcon";
import { JsIcon } from "../icons/JsIcon";
import { NextIcon } from "../icons/NextIcon";
import { HtmlIcon } from "../icons/HtmlIcon";
import { CssIcon } from "../icons/CssIcon";
import { PostgreIcon } from "../icons/PostgreIcon";
import { FirebaseIcon } from "../icons/FirebaseIcon";
import { TailwindIcon } from "../icons/TailwindIcon";

const Skills = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-2 md:px-6 py-10">
      <div className="text-center">
        <div
          x-data="{}"
          x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
          className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
        >
          <ul
            x-ref="logos"
            className="flex items-center text-white justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          >
            <li className="flex font-medium group ml-5 cursor-pointer hover:border-white  transition-all duration-500 rounded-full border px-4 py-[7px] items-center gap-2">
              <ReactIcon className="w-6 text-white" />
              Reactjs
            </li>
            <li className="flex font-medium group ml-5 cursor-pointer hover:border-white  transition-all duration-500 rounded-full border px-4 py-[7px] items-center gap-2">
              <JsIcon className="w-6 text-white" />
              JavaScript
            </li>
            <li className="flex font-medium group ml-5 cursor-pointer hover:border-white  transition-all duration-500 rounded-full border px-4 py-[7px] items-center gap-2">
              <NextIcon className="w-6 text-white" />
              Nextjs
            </li>
            <li className="flex font-medium group ml-5 cursor-pointer hover:border-white  transition-all duration-500 rounded-full border px-4 py-[7px] items-center gap-2">
              <HtmlIcon className="w-6 text-white" />
              HTML
            </li>
            <li className="flex font-medium group ml-5 cursor-pointer hover:border-white  transition-all duration-500 rounded-full border px-4 py-[7px] items-center gap-2">
              <CssIcon className="w-6 text-white" />
              CSS
            </li>
            <li className="flex font-medium group ml-5 cursor-pointer hover:border-white  transition-all duration-500 rounded-full border px-4 py-[7px] items-center gap-2">
              <PostgreIcon className="w-6 text-white" />
              Postgresql
            </li>
            <li className="flex font-medium group ml-5 cursor-pointer hover:border-white  transition-all duration-500 rounded-full border px-4 py-[7px] items-center gap-2">
              <FirebaseIcon className="w-6 text-white" />
              Firebase
            </li>
            <li className="flex font-medium group ml-5 cursor-pointer hover:border-white transition-all duration-500 rounded-full border px-4 py-[7px] items-center gap-2">
              <TailwindIcon className="w-6 text-white" />
              TailwindCSS
            </li>
          </ul>
          <ul
            x-ref="logos"
            className="flex items-center text-white justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            aria-hidden="true"
          >
            <li className="flex font-medium group ml-5 cursor-pointer hover:border-white transition-all duration-500 rounded-full border px-4 py-[7px] items-center gap-2">
              <ReactIcon className="w-6 text-white" />
              Reactjs
            </li>
            <li className="flex font-medium group ml-5 cursor-pointer hover:border-white transition-all duration-500 rounded-full border px-4 py-[7px] items-center gap-2">
              <JsIcon className="w-6 text-white" />
              JavaScript
            </li>
            <li className="flex font-medium group ml-5 cursor-pointer hover:border-white transition-all duration-500 rounded-full border px-4 py-[7px] items-center gap-2">
              <NextIcon className="w-6 text-white" />
              Nextjs
            </li>
            <li className="flex font-medium group ml-5 cursor-pointer hover:border-white transition-all duration-500 rounded-full border px-4 py-[7px] items-center gap-2">
              <HtmlIcon className="w-6 text-white" />
              HTML
            </li>
            <li className="flex font-medium group ml-5 cursor-pointer hover:border-white transition-all duration-500 rounded-full border px-4 py-[7px] items-center gap-2">
              <CssIcon className="w-6 text-white" />
              CSS
            </li>
            <li className="flex font-medium group ml-5 cursor-pointer hover:border-white transition-all duration-500 rounded-full border px-4 py-[7px] items-center gap-2">
              <PostgreIcon className="w-6 text-white" />
              Postgresql
            </li>
            <li className="flex font-medium group ml-5 cursor-pointer hover:border-white transition-all duration-500 rounded-full border px-4 py-[7px] items-center gap-2">
              <FirebaseIcon className="w-6 text-white" />
              Firebase
            </li>
            <li className="flex font-medium group ml-5 cursor-pointer hover:border-white transition-all duration-500 rounded-full border px-4 py-[7px] items-center gap-2">
              <TailwindIcon className="w-6 text-white" />
              TailwindCSS
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
