import styled from "styled-components";
import { DotTray, RedDot, GreenDot, YellowDot } from './IntroCard';


const CardContainer = styled.div`
   width: 373px;
   height: auto;
   /* margin-right: 2rem; */
   margin: auto;
   background: white;
   border: 1px solid #B1B1B1;
   box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
   border-radius: 20px;
   @media (max-width: 900px) {
    width: 100%;
    margin-bottom: 2rem;
    margin-right: 0.2rem;
   }
`;

const CardDetails = styled.div`
   padding: 1rem;
`;

const CardTitle = styled.h2`
  font-family: "Open sans", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  text-align: right;
`;

const CardDesc = styled.p`
  font-family: "Open sans", sans-serif;
  font-size: 1rem;
  color: #454545;
  text-align: right;
  margin-top: -1rem;
`;


//Todo
//create logic to assign random color to each project card from array:done
//map through projects data and display:done


function ProjectCard({ id, title, img, desc, github, live }) {
  return (
    <CardContainer>
      <DotTray style={{ width: "62px" }}>
        <RedDot />
        <YellowDot />
        <GreenDot />
      </DotTray>
      <CardDetails>
        <img src={img} alt={title} style={{ marginLeft: "-20px", marginTop: "-50px" }} />
        <CardTitle>{title}</CardTitle>
        <CardDesc>{desc}</CardDesc>
      </CardDetails>
    </CardContainer>
  )
}
export default ProjectCard;