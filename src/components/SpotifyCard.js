import styled from 'styled-components'
import { DotTray, RedDot, GreenDot, YellowDot } from './IntroCard';

const SpotifyCardWrapper = styled.div`
   width: 373px;
   height: 374px;
   left: 989px;
   top: 144px;
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
   justify-content: center;
   font-family: "Open sans", sans-serif;
   margin: auto;
`;


function SpotifyCard() {
    return (
        <SpotifyCardWrapper>
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
