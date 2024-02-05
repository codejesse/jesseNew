import Image from "next/image";
import Skills from "./components/skills";
import { GitHubIcon } from "./icons/Github";
import { LinkedInIcon } from "./icons/LinkedIn";
import { XIcon } from "./icons/XIcon";
import Card from "./components/Card";
import { GlowLines } from "./components/GlowLines";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24">
      <div className="absolute pb-20 top-0 h-fit w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        {/* fixing alignments */}
        <div className="flex justify-center">
          <div className="fixed top-0 lg:top-14 z-10 max-w-5xl w-full items-center justify-between font-syne text-sm lg:flex">
            <div className="left-0 top-0 flex w-full justify-center border-b border-gray-600 pb-4 pt-5 backdrop-blur-sm bg-white/10 lg:static lg:w-auto  lg:rounded-full lg:border lg:p-3">
              <Image src="/Jesse-1.svg" alt="jesse" width={40} height={40} />
              <h1 className="text-center lg:m-auto p-2 text-white">
                Jesse Beke
              </h1>
              <div className="flex flex-row gap-2 lg:hidden">
                <GitHubIcon className="w-10 my-auto text-white" />
                <LinkedInIcon className="w-6 my-auto text-white" />
                <XIcon className="w-5 ml-2 my-auto text-white" />
              </div>
            </div>
            {/* for icons in nav */}
            <div className="hidden lg:flex flex-row gap-4 text-white">
              <GitHubIcon className="w-10 my-auto text-white" />
              <LinkedInIcon className="w-6 my-auto text-white" />
              <XIcon className="w-5 ml-2 my-auto text-white" />
            </div>
          </div>
        </div>

        {/* hero section */}
        <div className="flex justify-center">
          <button className="mt-40 group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
            <span>
              <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
            </span>
            <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-800" />
            <span className="z-10 py-0.5 text-sm text-neutral-100">
              ✨ Learn more about my new SaaS
            </span>
          </button>
        </div>
        <h1 className="flex justify-center mt-8 mb-3 text-4xl lg:text-7xl font-semibold text-white">
          I&apos;m Jesse Beke
        </h1>
        <div className="flex justify-center">
          <p className="w-[80%] md:w-[80%] lg:w-[50%] text-[15px] lg:text-[18px] text-center text-[#6A6A6A]">
            Budding frontend engineer. I work with the React Ecosystem and I
            also create content around Javascript, React JS, Next JS and
            Typescript.
          </p>
        </div>
        <div className="flex justify-center mt-4 flex-row">
          <button className="rounded-md cursor-pointer text-sm transition-colors focus-visible:outline-none 0 border bg-white text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-l-full font-semibold flex items-center justify-center gap-2">
            <svg
              className="w-6 h-6 text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="m3.5 5.5 7.9 6c.4.3.8.3 1.2 0l7.9-6M4 19h16c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H4a1 1 0 0 0-1 1v12c0 .6.4 1 1 1Z"
              />
            </svg>
            Get in touch
          </button>
          <button className="rounded-md text-sm text-white transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:text-white h-10 px-4 py-2 rounded-r-full font-semibold flex items-center justify-center gap-2">
            <svg
              className="w-6 h-6 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 3v4c0 .6-.4 1-1 1H5m14-4v16c0 .6-.4 1-1 1H6a1 1 0 0 1-1-1V8c0-.4.1-.6.3-.8l4-4 .6-.2H18c.6 0 1 .4 1 1Z"
              />
            </svg>
            My Resume
          </button>
        </div>
        <Skills />
        <GlowLines />
        <h1 className="outline-text text-[60px] lg:text-[90px] mt-4 text-white font-semibold flex justify-center text-center">
          Projects
        </h1>
        {/* project card */}
        <div className="border w-full py-5 md:py-10 px-5 rounded-lg flex items-stretch justify-center flex-wrap gap-10">
          <Card />
          <Card />
        </div>
      </div>
    </main>
  );
}
