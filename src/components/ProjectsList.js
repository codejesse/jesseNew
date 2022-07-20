import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import ProjectsData from "./data";

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 55px;
  justify-content: center;
  @media (max-width: 800px) {
    flex-direction: column;
    margin: 20px;
  }
`;


function ProjectsList() {
  return (
    <ProjectsContainer>
      {ProjectsData.map((data, i) =>
        <ProjectCard
          key={i}
          title={data.title}
          desc={data.desc}
          img={data.img}
          github={data.github}
          live={data.live}
        />)}
    </ProjectsContainer>
  )
}
export default ProjectsList;