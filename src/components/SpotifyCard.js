import styled from 'styled-components'
import { DotTray, RedDot, GreenDot, YellowDot } from './IntroCard';
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const SpotifyCardWrapper = styled.div`
   width: 373px;
   height: 374px;
   background: #FFFFFF;
   border: 1px solid #B1B1B1;
   box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
   border-radius: 20px;
   @media (max-width: 1200px) {
    width: 100%;
  }
`;

const CardDetails = styled.div` 
   display: flex;
   margin-top: 4rem;
   justify-content: center;
   font-family: "Open sans", sans-serif;
   padding: 3rem;
`;


function SpotifyCard() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <SpotifyCardWrapper data-aos="fade-down" data-aos-duration="1000">
            <DotTray style={{ width: "62px" }}>
                <RedDot />
                <YellowDot />
                <GreenDot />
            </DotTray>
            <CardDetails>
                <img src='Spotify.png' alt='spotify-icon' />
                <h2>Not Listening</h2>
            </CardDetails>
        </SpotifyCardWrapper>
    )
}
export default SpotifyCard;
