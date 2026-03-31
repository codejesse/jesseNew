"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

import VideoAskProvider from "@altmind-digital/videoask-custom-provider";
import ShowWidget from "@/app/UI/components/ShowWidget";
import DockNavbar from "@/app/UI/components/DockNavbar";
import SpotifyWidget from "@/app/UI/components/SpotifyWidget";

import LogoLoop from "@/components/LogoLoop";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiGithub, SiX, SiGmail, SiGooglemeet } from 'react-icons/si';
import { FaLinkedin } from "react-icons/fa";
import { FiArrowUpRight, FiArrowRight, FiFileText } from "react-icons/fi";

const CurrentTimeComponent = () => {
    const [time, setTime] = useState("");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const updateTime = () => {
            const timeString = new Date().toLocaleTimeString("en-US", {
                timeZone: "Africa/Lagos",
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
            });
            setTime(`${timeString} GMT +1`);
        };
        updateTime();
        const interval = setInterval(updateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    if (!mounted) return <div className="h-4"></div>;

    return (
        <div className="flex items-center gap-1.5 text-[11px] md:text-sm font-clash text-gray-500 dark:text-gray-400 tracking-wide mt-2">
            <span>🇳🇬</span>
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse ml-0.5"></span>
            {time}
        </div>
    );
};

const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

const imageLogos = [
    { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
    { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
    { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("Home");
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const videoAskConfig = {
    kind: "widget" as "widget",
    url: "https://www.videoask.com/f3ax5anxh",
    options: {
      widgetType: "VideoThumbnailSmall" as "VideoThumbnailWindow",
      text: "Talk to Jesse",
      backgroundColor: "#FFFFFF",
      position: "bottom-right" as "bottom-left",
      dismissible: false,
      videoPosition: "center center",
    },
  };

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const logoFadeColor = !mounted ? "#242424" : currentTheme === 'light' ? "#ffffff" : "#242424";

  return (
      <main className="flex min-h-screen flex-col items-center bg-white dark:bg-[#242424] transition-colors duration-300 relative pb-32">
        {/* Background Banner */}
        <div className="w-full bg-[url(../public/background-image.svg)] h-[200px] bg-no-repeat sm:bg-cover lg:bg-cover"></div>

        {/* Animated Content Area */}
        <div className="w-full flex-1 flex flex-col items-center px-4">
          <AnimatePresence mode="wait">
            <motion.div
                key={activeTab} // The key tells Framer Motion when to trigger the animation
                initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                exit={{ opacity: 0, filter: "blur(10px)", y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full max-w-2xl flex flex-col items-center md:items-start"
            >
              {/* Conditional Rendering based on active tab */}
                {activeTab === "Home" && (
                    <div className="flex flex-col mt-[-70px] w-full">
                        <div className="rounded-full py-4 px-5 border border-gray-200 dark:border-[#333] w-fit bg-[#f9f9f9] dark:bg-[#F4F4F4] self-center md:self-start transition-colors">
                            <Image className="w-20" src="/jesse-memoji-1.svg" alt="jesse-memoji" width={100} height={100} />
                        </div>
                        <SpotifyWidget />
                        <div className="flex flex-col md:flex-row justify-between items-center md:items-end w-full mt-6 gap-4">
                            <h1 className="text-4xl font-chonburi text-black dark:text-white transition-colors text-center md:text-left">Jesse Beke</h1>
                            <div className="flex flex-col items-center md:items-end">
                                <div className="flex gap-4 text-gray-600 dark:text-gray-300 text-xl">
                                    <a href="#" className="hover:text-black dark:hover:text-white transition-colors" aria-label="GitHub"><SiGithub /></a>
                                    <a href="#" className="hover:text-black dark:hover:text-white transition-colors" aria-label="LinkedIn"><FaLinkedin /></a>
                                    <a href="#" className="hover:text-black dark:hover:text-white transition-colors" aria-label="X (Twitter)"><SiX /></a>
                                </div>
                                <CurrentTimeComponent />
                            </div>
                        </div>
                        <div className="mt-8 text-left">
                            <p className="text-gray-800 dark:text-white transition-colors font-clash leading-relaxed">
                                I'm Jesse Beke, a 22-year old Software Developer, robotics enthusiast and life long learner.
                                I'm currently working on a few things <span className="inline-block h-fit w-20 bg-[url(../public/draft-logo.svg)] dark:bg-[url(../public/draft-logo-dark.svg)] bg-no-repeat text-none mr-[-24px]">, </span> a kinetic content generator for newsletter content creators, also <span className="inline-block h-fit w-20 bg-[url(../public/Arju-logo-light.svg)] dark:bg-[url(../public/Arju-logo.svg)] bg-no-repeat mr-[-35px]">,</span> the future of trust and e-commerce in the used products market.
                            </p>
                            <p className="mt-4 text-gray-800 dark:text-white transition-colors font-clash leading-relaxed">
                                I'm also looking to contribute to projects or a team passionate about changing the world, feel free to checkout my projects and my qualifications, reach out to me and i’ll be back at you <strong>ASAP!</strong>
                                <span className="inline-flex flex-wrap items-center gap-4 ml-0 md:ml-3 mt-2 md:mt-0 relative top-0.5">
                                    <a href="mailto:reachjessehere@gmail.com" className="inline-flex items-center gap-1.5 font-medium hover:underline text-black dark:text-white transition-colors">
                                        <SiGmail className="w-4 h-4 text-[#EA4335]" />
                                        <span>reachjessehere@gmail.com</span>
                                    </a>
                                    <a href="https://meet.google.com/" className="inline-flex items-center gap-1.5 font-medium hover:underline text-black dark:text-white transition-colors">
                                        <SiGooglemeet className="w-[18px] h-[18px] text-[#00897B]" />
                                        <span>Or book a 1:1 call</span>
                                    </a>
                                    <a href="https://drive.google.com/file/d/11Qy-EHxVEgOhZ_f--xeSN_UPIjlw0Yz5/view" target="_blank" className="inline-flex items-center gap-1.5 font-medium hover:bg-black/5 dark:hover:bg-white/10 text-black dark:text-white px-3 py-1 rounded-full text-xs border border-gray-200 dark:border-white/20 transition-colors ml-0 md:ml-2">
                                        <FiFileText className="w-3.5 h-3.5" />
                                        View Resume
                                    </a>
                                </span>
                            </p>
                        </div>

                        {/* Updated Responsive & Sleek LogoLoop */}
                        <div className="w-full mt-10 mb-16 overflow-hidden flex flex-col items-center md:items-start">
                            <p className="text-gray-400 font-clash text-xs mb-4 uppercase tracking-[0.2em]">
                                Tools & Technologies
                            </p>
                            <div className="w-full max-w-[700px]"> {/* Constrains the width nicely */}
                                <LogoLoop
                                    logos={techLogos}
                                    speed={30} /* Slowed down for a premium feel */
                                    direction="left"
                                    logoHeight={28} /* Scaled down to standard icon size */
                                    gap={40}
                                    hoverSpeed={0}
                                    scaleOnHover
                                    fadeOut
                                    fadeOutColor={logoFadeColor}
                                    ariaLabel="Technology stack"
                                    className="text-gray-800 dark:text-gray-300 transition-colors"
                                />
                            </div>
                        </div>

                        {/* Selected Projects */}
                        <div className="w-full flex flex-col gap-12 mt-6">
                            <div>
                                <h2 className="text-xl font-clash font-medium text-black dark:text-white mb-6">Selected projects</h2>
                                <div className="flex flex-col gap-12">
                                     {/* Project 1 */}
                                     <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
                                         <div className="flex-1 flex flex-col justify-center">
                                             <p className="text-gray-400 font-clash text-xs mb-2">2019 - present</p>
                                             <h3 className="text-xl font-clash font-bold text-black dark:text-white mb-2">Arju - Your need, their lead in seconds.</h3>
                                             <p className="text-gray-500 dark:text-gray-400 font-clash text-sm mb-4 leading-relaxed max-w-sm">
                                                 Stop walking the plazas. Broadcast what you need and let verified Port Harcourt vendors compete to give you the best price.
                                             </p>
                                             <a href="#" className="text-black dark:text-white font-clash text-sm font-medium hover:underline flex items-center gap-1 w-fit">
                                                 Check out <FiArrowUpRight className="w-4 h-4"/>
                                             </a>
                                         </div>
                                         <div className="w-full md:w-[320px] lg:w-[250px] aspect-video rounded-xl bg-gray-100 dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 overflow-hidden relative shrink-0">
                                            <Image src="/arju-thumbnail.png" alt="Arju Screenshot" fill className="object-cover" />
                                         </div>
                                     </div>

                                     {/* Project 2 */}
                                     <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
                                         <div className="flex-1 flex flex-col justify-center">
                                             <p className="text-gray-400 font-clash text-xs mb-2">2019 - present</p>
                                             <h3 className="text-xl font-clash font-bold text-black dark:text-white mb-2">Draft - Create next generation resumes.</h3>
                                             <p className="text-gray-500 dark:text-gray-400 font-clash text-sm mb-4 leading-relaxed max-w-sm">
                                                 Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.
                                             </p>
                                             <a href="#" className="text-black dark:text-white font-clash text-sm font-medium hover:underline flex items-center gap-1 w-fit">
                                                 Check out <FiArrowUpRight className="w-4 h-4"/>
                                             </a>
                                         </div>
                                         <div className="w-full md:w-[320px] lg:w-[250px] aspect-video rounded-xl bg-gray-100 dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 overflow-hidden relative shrink-0">
                                            <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-red-50 dark:from-orange-900/30 dark:to-red-900/30 flex items-center justify-center text-orange-300 dark:text-orange-800 font-clash text-sm">Screenshot Placeholder</div>
                                         </div>
                                     </div>
                                </div>
                                <div className="mt-8">
                                    <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab("Projects"); }} className="text-black dark:text-white font-clash text-sm font-medium hover:underline flex items-center gap-1">
                                        View all projects <FiArrowRight className="w-4 h-4"/>
                                    </a>
                                </div>
                            </div>

                            {/* Selected Blog Posts */}
                            <div className="mt-10">
                                <h2 className="text-xl font-clash font-medium text-black dark:text-white mb-6">Selected Blog Posts</h2>
                                <div className="flex flex-col gap-6">
                                    <div className="flex justify-between items-center group cursor-pointer border-b border-gray-200 dark:border-white/10 pb-6 transition-colors hover:border-black dark:hover:border-white w-full">
                                        <div className="pr-4">
                                            <h3 className="text-[17px] font-clash font-medium text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1.5 line-clamp-2 md:line-clamp-1">Building Arju: A deep dive into modern E-commerce logic</h3>
                                            <p className="text-gray-500 dark:text-gray-400 font-clash text-sm">March 15, 2026</p>
                                        </div>
                                        <FiArrowUpRight className="w-5 h-5 shrink-0 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                                    </div>
                                    <div className="flex justify-between items-center group cursor-pointer border-b border-gray-200 dark:border-white/10 pb-6 transition-colors hover:border-black dark:hover:border-white w-full">
                                        <div className="pr-4">
                                            <h3 className="text-[17px] font-clash font-medium text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1.5 line-clamp-2 md:line-clamp-1">Refactoring my Next.js portfolio with Tailwind & Framer Motion</h3>
                                            <p className="text-gray-500 dark:text-gray-400 font-clash text-sm">March 1, 2026</p>
                                        </div>
                                        <FiArrowUpRight className="w-5 h-5 shrink-0 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                                    </div>
                                    <div className="flex justify-between items-center group cursor-pointer border-b border-gray-200 dark:border-white/10 pb-6 transition-colors hover:border-black dark:hover:border-white w-full">
                                        <div className="pr-4">
                                            <h3 className="text-[17px] font-clash font-medium text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1.5 line-clamp-2 md:line-clamp-1">The future of Resumes: Why video and audio matter</h3>
                                            <p className="text-gray-500 dark:text-gray-400 font-clash text-sm">February 12, 2026</p>
                                        </div>
                                        <FiArrowUpRight className="w-5 h-5 shrink-0 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab("Blog"); }} className="text-black dark:text-white font-clash text-sm font-medium hover:underline flex items-center gap-1">
                                        View all posts <FiArrowRight className="w-4 h-4"/>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                )}

              {activeTab === "Projects" && (
                  <div className="w-full mt-8 text-black dark:text-white transition-colors">
                    <h2 className="text-3xl font-chonburi mb-4">My Projects</h2>
                    <p className="font-clash">Here is where you can map out your CardList or project components...</p>
                    {/* <CardList /> */}
                  </div>
              )}

              {activeTab === "Blog" && (
                  <div className="w-full mt-8 text-black dark:text-white transition-colors">
                    <h2 className="text-3xl font-chonburi mb-4">Blog</h2>
                    <p className="font-clash">Recent thoughts and articles go here...</p>
                  </div>
              )}

              {activeTab === "xplore" && (
                  <div className="w-full mt-8 text-black dark:text-white transition-colors">
                    <h2 className="text-3xl font-chonburi mb-4">Xplore</h2>
                    <p className="font-clash">Experiments and random builds...</p>
                  </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <VideoAskProvider config={videoAskConfig}>
          <ShowWidget />
        </VideoAskProvider>

        {/* Pass state to the Dock */}
        <DockNavbar active={activeTab} setActive={setActiveTab} />
      </main>
  );
}