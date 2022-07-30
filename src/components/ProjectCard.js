import styled from "styled-components";
import { DotTray, RedDot, GreenDot, YellowDot } from './IntroCard';
import { Link, BrowserRouter as Router } from "react-router-dom";
import { useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const CardContainer = styled.div`
   width: 373px;
   height: auto;
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
  text-decoration: underline;
  text-decoration-color: coral;
  text-decoration-style: dotted;
`;

const CardDesc = styled.p`
  font-family: "Open sans", sans-serif;
  font-size: 1rem;
  color: #454545;
  text-align: right;
  margin-top: -1rem;
`;

// const CardLinks = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-around;
//   width: 30%;
// `;

//Todo
//create logic to assign random color to each project card from array:done
//map through projects data and display:done


function ProjectCard({ id, title, img, desc, github, live }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <CardContainer data-aos="fade-up" data-aos-duration="2000">
      <DotTray style={{ width: "62px" }}>
        <RedDot />
        <YellowDot />
        <GreenDot />
      </DotTray>
      <CardDetails>
        <img src={img} alt={title} style={{ marginLeft: "-20px", marginTop: "-50px" }} />
        <Link style={{ textDecoration: "none", color: "black" }} to={`/project/${id}`}>
          <CardTitle>{title}</CardTitle>
        </Link>
        <CardDesc>{desc}</CardDesc>
      </CardDetails>
    </CardContainer>
  )
}
export default ProjectCard;