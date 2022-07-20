import styled from "styled-components";

const TrayWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 20%;
`;

const ProjectChip = styled.div`
     width: 100%;
     height: 100px;
     border: 3px solid blue;
     background: rgba(255, 255, 255, 0.3);
     border-radius: 15px;
     color: white;
     background-image: url("background.jpeg");
`;

function ProjectsTray() {
    return (
        <TrayWrapper>
            <ProjectChip />
            <ProjectChip />
        </TrayWrapper>
    )
}
export default ProjectsTray;