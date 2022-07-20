import styled from 'styled-components'
import { DotTray, RedDot, GreenDot, YellowDot } from './IntroCard';

const TerminalCardWrapper = styled.div`
   width: 373px;
   height: 374px;
   left: 989px;
   top: 144px;
   margin-right: 4rem;
   margin-bottom: 2rem;
   background: black;
   border: 1px solid #B1B1B1;
   box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
   border-radius: 20px;
   @media (max-width: 1200px) {
    width: 100%;
    margin-top: 0;
  }
`;

const AboutText = styled.p`
   color: white;
   margin: 0.5rem;
   font-family: "Open Sans", sans-serif;
`;


function TerminalCard() {
    const Time = new Date()
    return (
        <TerminalCardWrapper>
            <DotTray style={{ width: "62px" }}>
                <RedDot />
                <YellowDot />
                <GreenDot />
            </DotTray>
            <AboutText>Last login: {Time.toDateString()}</AboutText>
            <AboutText>client@Jesse ~ % Hello 👋🏾 i'm Jesse an intermediate
                Front-End developer based in Nigeria, i am skilled with web technologies
                such as HTML, CSS, javaScript-Es6, Reactjs, TypeScript, Nodejs, styled-components.</AboutText>
        </TerminalCardWrapper>
    )
}
export default TerminalCard;
