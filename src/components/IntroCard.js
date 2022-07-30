import styled from 'styled-components'
import SpotifyCard from './SpotifyCard';
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 12px;
  flex-direction: row;
  justify-content: center;
  padding-top: 6.2rem;
  @media (max-width: 800px) {
    flex-direction: column;
    margin: 20px;
  }
`;

export const IntroCardWrapper = styled.div`
   background: #FFFFFF;
   margin-right: 3rem;
   border: 1px solid #B1B1B1;
   box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
   border-radius: 20px;
   width: 50%;
   height: 320px;
   background-image: url("/vector3.png");
   background-repeat: no-repeat;
   background-size: 22rem;
   background-position: right;
   @media (max-width: 1200px) {
    background-image: none;
    width: 100%;
    height: auto;
    margin-bottom: 2rem;
  }
`;

const ImageWrapper = styled.div`
   width: 50%;
   /* */
`;

const TextWrapper = styled.div`
   width: 335px;
   height: auto;
   text-align: left;
   padding: 1rem;
   @media (max-width: 500px) {
    width: 100%;
   }
`;

const IntroText = styled.p`
  margin-top: -0.9rem;
  font-family: sans-serif;
  font-weight: 400;
  font-family: "Open Sans", sans-serif;
  color: #454545;
  @media (max-width: 800px) {
    padding: 0.7rem;
   }
`;

export const DotTray = styled.div`
  display: flex;
  justify-content: space-between;
  width: 9%;
  flex-direction: row;
  margin: 10px;
  @media (max-width: 600px) {
    width: 12%;
  }
`;

export const RedDot = styled.div`
  width: 15px;
  height: 15px;
  left: 22px;
  top: 15px;
  background: #FF0303;
  border-radius: 360px;
`;

export const YellowDot = styled.div`
  width: 15px;
  height: 15px;
  left: 22px;
  top: 15px;
  background: #F5E341;
  border-radius: 360px;
`;

export const GreenDot = styled.div`
  width: 15px;
  height: 15px;
  left: 22px;
  top: 15px;
  background: #09FF3F;
  border-radius: 360px;
`;


function IntroCard() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <IntroContainer>
      <IntroCardWrapper data-aos="fade-up">
        <DotTray>
          <RedDot />
          <YellowDot />
          <GreenDot />
        </DotTray>
        <ImageWrapper><img src='img-3.png' alt='img-1' /></ImageWrapper>
        <TextWrapper>
          <IntroText>Hi i'm Jesse Beke a Front-End
            developer interested in Animations,
            product design. I work with Reactjs,
            React Native, TypeScript, Gsap.</IntroText>
        </TextWrapper>
      </IntroCardWrapper>
      <SpotifyCard />
    </IntroContainer>
  )
}
export default IntroCard;
