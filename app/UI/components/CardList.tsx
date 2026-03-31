import React from "react";
import Card from "./Card";
import projects from "../data/projects";

const CardList = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {projects.map((project) => (
        <Card key={project.projectName} project={project} />
      ))}
    </div>
  );
};

export default CardList;
