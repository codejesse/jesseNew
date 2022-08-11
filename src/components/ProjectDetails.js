import styled from "styled-components";
import Navbar from "./Navbar";
import ProjectsData from "./data";
import { useParams } from "react-router-dom";
import BottomNav from "./BottomNav";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"

export const DetailsWrapper = styled.div`
   background-image: url("/background-2.jpg");
   background-repeat: no-repeat;
   background-size: cover;
   overflow: hidden;
   height: 100vh;
   @media (max-width: 1200px) {
    height: auto;
   }
`;

const DetailsContainer = styled.div`
   display: flex;
   flex-direction: row;
   border: 1px solid white;
   margin: 8rem;
   background-color: white;
   border-radius: 15px;
   padding: 1rem;
   border: 1px solid #B1B1B1;
   box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
   @media (max-width: 1200px) {
    flex-direction: column;
    width: 80%;
    margin: auto;
   }
`;

const DetailsData = styled.div`
   display: flex;
   flex-direction: column;
   margin: auto;
   justify-content: right; 
   width: 68%;
`;

const DetailsHeader = styled.h2`
   font-family: "Open sans", sans-serif;
   font-size: 40px;
`;

const DetailsPara = styled.p`
    font-family: "Open sans", sans-serif;
    margin-top: -1rem;
    width: 80%;
    color: #454545;
`;

export const ProjectLinks = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   width: 12%;
   & a {
    color: black;
   }
   & a:hover {
    color: coral;
   }
`;

//logic to show only the id that matches the global id:done


function ProjectDetails() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const { id } = useParams();
    return (
        <DetailsWrapper>
            <Navbar />
            <DetailsContainer data-aos="fade-up">
                <img style={{ marginLeft: "-16px" }} width="500px" src={ProjectsData[id].img} alt={ProjectsData[id].title} />
                <DetailsData>
                    <DetailsHeader>{ProjectsData[id].title}</DetailsHeader>
                    <DetailsPara>{ProjectsData[id].details}</DetailsPara>
                    <ProjectLinks>
                        <a href={ProjectsData[id].live} target="_blank" rel="noreferrer"><FaExternalLinkAlt size={28} /></a>
                        <a href={ProjectsData[id].github} target="_blank" rel="noreferrer"><FaGithub size={30} /></a>
                    </ProjectLinks>
                </DetailsData>
            </DetailsContainer>
            <BottomNav />
        </DetailsWrapper>
    )
}

export default ProjectDetails;