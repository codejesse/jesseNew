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
            <li>Reactjs</li>
            <li>javascript</li>
            <li>nextjs</li>
            <li>html</li>
            <li>css</li>
            <li>postgresql</li>
            <li>firebase</li>
            <li>tailwindcss</li>
          </ul>
          <ul
            x-ref="logos"
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true"
          >
            <li>Reactjs</li>
            <li>javascript</li>
            <li>nextjs</li>
            <li>html</li>
            <li>css</li>
            <li>postgresql</li>
            <li>firebase</li>
            <li>tailwindcss</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
