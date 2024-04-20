export interface Project {
  projectName: string;
  imgUrl: string;
  desc: string;
  gitLink: string;
  link: string;
  tools: object;
  status: string;
}

const projects: Project[] = [
  {
    projectName: "Draft",
    imgUrl: "",
    desc: "Draft is the worlds first video/audio integrated resume builder that allows you record and share with recruiters and friends and stand out.",
    gitLink: "",
    link: "",
    tools: [],
    status: "In-progress",
  },
  {
    projectName: "Quid",
    imgUrl: "",
    desc: "Quid is a Nextjs themed landing page for a fintech mobile app, it is hooked with a headless CMS(ButterCMS) for the sites data. This template can be used to supercharge your landing page build.",
    gitLink: "https://github.com/codejesse/Quid",
    link: "https://quid-two.vercel.app/",
    tools: [],
    status: "In-progress",
  },
  {
    projectName: "Vendasupply",
    imgUrl: "",
    desc: "Venda makes placing restocking orders more efficient. Our intuitive platform streamlines operations for hotels, restaurants and general retailers.",
    gitLink: "https://vendasupply.com/",
    link: "https://vendasupply.com/",
    tools: [],
    status: "Completed",
  },
];

export default projects;
