import styled from "styled-components";
import { DotTray, GreenDot, RedDot, YellowDot } from "./IntroCard";
import { FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa"
import { useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Maps from "./Maps";


const FooterWrapper = styled.div`
   display: flex;
   justify-content: space-around;
   margin-top: 3rem;
   margin-bottom: 3rem;
   margin: 2rem;
   @media (max-width: 800px) {
    margin: 5px;
    flex-direction: column;
   }
`;

const FooterCard = styled.div`
   width: 60%;
   height: auto;
   background: #FFFFFF;
   background-image: url("/Wavy.png");
   background-repeat: no-repeat;
   background-position: center;
   /* border: 1px solid #B1B1B1;
   box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1); */
   background-color: #6610F2;
   border-radius: 60px;
   margin-left: 1rem;
   color: #FFFFFF;
   @media (max-width: 800px) {
    width: 95%;
    margin: 10px;
   }
`;

const FooterDetails = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5rem;
  @media (max-width: 800px) {
    padding: 1rem;
    flex-direction: column;
   }
`;

const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterHeader = styled.h2`
   font-family: "Open sans", sans-serif;
   font-style: italic;
   font-weight: 700;
   font-size: 40px;
   width: 100%;
`;

const SocialWrapper = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   width: 40%;
   margin-top: -20px;
   & a  {
    color: black;
   }
`;


function Footer() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <FooterWrapper>
            <FooterCard data-aos="zoom-in-up" data-aos-duration="1000">
                <FooterDetails>
                    <img src="/Reach-out.png" width="200px" alt="footer-pic" />
                    <FooterRight>
                        <FooterHeader>Feel free to reach out</FooterHeader>
                        <SocialWrapper>
                            <a href="https://github.com/codejesse/" target="_blank" rel="noreferrer"><FaGithub size={30} color="white"/></a>
                            <a href="https://twitter.com/jessebeke" target="_blank" rel="noreferrer"><FaTwitter size={30} color="white" /></a>
                            <a href="mailto:jessebeke10@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope size={30} color="white" /></a>
                        </SocialWrapper>
                    </FooterRight>
                </FooterDetails>
            </FooterCard>
            <Maps />
        </FooterWrapper>
    )
}
export default Footer