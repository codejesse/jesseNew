import React from "react";

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
              Reactjs
            </li>
            <li className="flex font-medium group ml-5 cursor-pointer hover:border-white  transition-all duration-500 rounded-full border px-4 py-[7px] items-center gap-2">
              Javascript
            </li>
            <li className="flex font-medium group ml-5 cursor-pointer hover:border-white  transition-all duration-500 rounded-full border px-4 py-[7px] items-center gap-2">
              Nextjs
            </li>
            <li className="flex font-medium group ml-5 cursor-pointer hover:border-white  transition-all duration-500 rounded-full border px-4 py-[7px] items-center gap-2">
              Html
            </li>
            <li className="flex font-medium group ml-5 cursor-pointer hover:border-white  transition-all duration-500 rounded-full border px-4 py-[7px] items-center gap-2">
              Css
            </li>
            <li className="flex font-medium group ml-5 cursor-pointer hover:border-white  transition-all duration-500 rounded-full border px-4 py-[7px] items-center gap-2">
              Postgresql
            </li>
            <li className="flex font-medium group ml-5 cursor-pointer hover:border-white  transition-all duration-500 rounded-full border px-4 py-[7px] items-center gap-2">
              Firebase
            </li>
            <li className="flex font-medium group ml-5 cursor-pointer hover:border-white transition-all duration-500 rounded-full border px-4 py-[7px] items-center gap-2">
              TailwindCss
            </li>
          </ul>
          <ul
            x-ref="logos"
            className="flex items-center text-white justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            aria-hidden="true"
          >
            <li className="flex font-medium group ml-5 cursor-pointer hover:border-white transition-all duration-500 rounded-full border px-4 py-[7px] items-center gap-2">
              Reactjs
            </li>
            <li className="flex font-medium group ml-5 cursor-pointer hover:border-white transition-all duration-500 rounded-full border px-4 py-[7px] items-center gap-2">
              Javascript
            </li>
            <li className="flex font-medium group ml-5 cursor-pointer hover:border-white transition-all duration-500 rounded-full border px-4 py-[7px] items-center gap-2">
              Nextjs
            </li>
            <li className="flex font-medium group ml-5 cursor-pointer hover:border-white transition-all duration-500 rounded-full border px-4 py-[7px] items-center gap-2">
              Html
            </li>
            <li className="flex font-medium group ml-5 cursor-pointer hover:border-white transition-all duration-500 rounded-full border px-4 py-[7px] items-center gap-2">
              Css
            </li>
            <li className="flex font-medium group ml-5 cursor-pointer hover:border-white transition-all duration-500 rounded-full border px-4 py-[7px] items-center gap-2">
              Postgresql
            </li>
            <li className="flex font-medium group ml-5 cursor-pointer hover:border-white transition-all duration-500 rounded-full border px-4 py-[7px] items-center gap-2">
              Firebase
            </li>
            <li className="flex font-medium group ml-5 cursor-pointer hover:border-white transition-all duration-500 rounded-full border px-4 py-[7px] items-center gap-2">
              TailwindCss
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
