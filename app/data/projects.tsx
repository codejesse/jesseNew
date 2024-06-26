export interface Project {
  projectName: string;
  imgUrl: string;
  desc: string;
  gitLink: string;
  link: string;
  tools: Array<string>;
  status: string;
}

const projects: Project[] = [
  {
    projectName: "Draft",
    imgUrl: "https://res.cloudinary.com/daiio9iqt/image/upload/v1715882406/projects/draft_ufxrcd.png",
    desc: "Draft is the worlds first video/audio integrated resume builder that allows you record and share with recruiters and friends and stand out.",
    gitLink: "",
    link: "",
    tools: ["Reactjs", "Redux-toolkit", "TailwindCSS", "Firebase"],
    status: "In-progress",
  },
  {
    projectName: "Forge ai",
    imgUrl: "https://res.cloudinary.com/daiio9iqt/image/upload/v1717883437/projects/1c708318-2757-45d5-8af2-8956344ba902.png",
    desc: "Forge ai is an ai scheduler that makes it super easy to create a personalized schedule just from a prompt, also allowing you add it to your google calendar.",
    gitLink: "https://github.com/codejesse/forge-ai",
    link: "https://github.com/codejesse/forge-ai",
    tools: ["Reactjs", "TailwindCSS", "Firebase", "Gemini api"],
    status: "In-progress",
  },
  {
    projectName: "Quid",
    imgUrl: "https://res.cloudinary.com/daiio9iqt/image/upload/v1715882380/projects/Quid_sxggsi.svg",
    desc: "Quid is a Nextjs themed landing page for a fintech mobile app, it is hooked with a headless CMS(prismic) for the sites data. This template can be used to supercharge your landing page build.",
    gitLink: "https://github.com/codejesse/Quid",
    link: "https://quid-seven.vercel.app/",
    tools: ["Nextjs", "TailwindCSS", "prismic", "Framer-motion"],
    status: "Completed",
  },
  {
    projectName: "Vendasupply",
    imgUrl: "https://res.cloudinary.com/daiio9iqt/image/upload/v1715930846/projects/venda_ewz2y8.png",
    desc: "Venda makes placing restocking orders more efficient. Our intuitive platform streamlines operations for hotels, restaurants and general retailers.",
    gitLink: "https://vendasupply.com/",
    link: "https://vendasupply.com/",
    tools: ["Nextjs", "TailwindCSS"],
    status: "Completed",
  },
];

export default projects;
