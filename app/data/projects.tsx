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
    desc: "",
    gitLink: "",
    link: "",
    tools: [],
    status: "In-progress",
  },
  {
    projectName: "Quid",
    imgUrl: "",
    desc: "Quid is a Nextjs themed landing page for a fintech mobile app, it is hooked with a headless CMS(ButterCMS) for the sites data. This template can be used to supercharge your landing page build.",
    gitLink: "",
    link: "",
    tools: [],
    status: "In-progress",
  },
  {
    projectName: "Vendasupply",
    imgUrl: "",
    desc: "",
    gitLink: "",
    link: "",
    tools: [],
    status: "Completed",
  },
];

export default projects;
