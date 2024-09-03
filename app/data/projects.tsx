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
    projectName: "Pollstack",
    imgUrl:
      "https://res.cloudinary.com/daiio9iqt/image/upload/v1724437262/projects/4daed393-f61d-4c6b-bc92-0c0a64acb786.png",
    desc: "Create actionable business recommendations from user feedback with ai.",
    gitLink: "#",
    link: "#",
    tools: ["Nextjs", "Postgresql", "Drizzle", "trpc"],
    status: "In-progress",
  },
  {
    projectName: "Draft",
    imgUrl:
      "https://res.cloudinary.com/daiio9iqt/image/upload/v1715882406/projects/draft_ufxrcd.png",
    desc: "Draft is the worlds first video/audio integrated resume builder that allows you record and share with recruiters and friends and stand out.",
    gitLink: "",
    link: "",
    tools: ["Reactjs", "Redux-toolkit", "TailwindCSS", "Firebase"],
    status: "In-progress",
  },
  {
    projectName: "Forge ai",
    imgUrl:
      "https://res.cloudinary.com/daiio9iqt/image/upload/v1717883437/projects/1c708318-2757-45d5-8af2-8956344ba902.png",
    desc: "Forge ai is an ai scheduler that makes it super easy to create a personalized schedule just from a prompt, also allowing you add it to your google calendar.",
    gitLink: "https://github.com/codejesse/forge-ai",
    link: "https://github.com/codejesse/forge-ai",
    tools: ["Reactjs", "TailwindCSS", "Firebase", "Gemini api"],
    status: "In-progress",
  },
  {
    projectName: "Sofa-commerce",
    imgUrl:
      "https://res.cloudinary.com/daiio9iqt/image/upload/v1725383696/projects/5c79b7e9-9eec-40f5-bac2-f3f0529d203b.png",
    desc: "Sofa Commerce is a Next.js-based e-commerce platform where you can shop the best deals on furniture. The project is optimized for performance and SEO, offering a seamless shopping experience.",
    gitLink: "https://github.com/codejesse/Sofa",
    link: "https://sofa-beta.vercel.app/",
    tools: ["Nextjs", "TailwindCSS", "Dexijs", "shadcn"],
    status: "Completed",
  },
  // {
  //   projectName: "Untitled",
  //   imgUrl:
  //     "https://res.cloudinary.com/daiio9iqt/image/upload/v1724437819/projects/8f0bd208-091c-444b-b777-8675028ab0ab.png",
  //   desc: "Browse through popular SaaS tools and also submit yours.",
  //   gitLink: "#",
  //   link: "#",
  //   tools: ["Nextjs", "TailwindCSS", "Prisma", "Supabase"],
  //   status: "In-progress",
  // },
  {
    projectName: "Quid",
    imgUrl:
      "https://res.cloudinary.com/daiio9iqt/image/upload/v1715882380/projects/Quid_sxggsi.svg",
    desc: "Quid is a Nextjs themed landing page for a fintech mobile app, it is hooked with a headless CMS(prismic) for the sites data. This template can be used to supercharge your landing page build.",
    gitLink: "https://github.com/codejesse/Quid",
    link: "https://quid-seven.vercel.app/",
    tools: ["Nextjs", "TailwindCSS", "prismic", "Framer-motion"],
    status: "Completed",
  },
  {
    projectName: "Vendasupply",
    imgUrl:
      "https://res.cloudinary.com/daiio9iqt/image/upload/v1715930846/projects/venda_ewz2y8.png",
    desc: "Venda makes placing restocking orders more efficient. Our intuitive platform streamlines operations for hotels, restaurants and general retailers.",
    gitLink: "https://vendasupply.com/",
    link: "https://vendasupply.com/",
    tools: ["Nextjs", "TailwindCSS"],
    status: "Completed",
  },
];

export default projects;
