import styled from "styled-components";
import { DotTray, GreenDot, RedDot, YellowDot } from "./IntroCard";

const FooterWrapper = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 3rem;
   margin-bottom: 3rem;
   @media (max-width: 800px) {
    margin: 5px;
   }
`;

const FooterCard = styled.div`
   width: 65%;
   height: auto;
   background: #FFFFFF;
   border: 1px solid #B1B1B1;
   box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
   border-radius: 20px;
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

const FooterHeader = styled.h2`
   font-family: "Open sans", sans-serif;
   font-style: italic;
   font-weight: 700;
   font-size: 2rem;
`;


function Footer() {
    return (
        <FooterWrapper>
            <FooterCard>
                <DotTray>
                    <RedDot />
                    <YellowDot />
                    <GreenDot />
                </DotTray>
                <FooterDetails>
                    <img src="img-3.png" alt="footer-pic" />
                    <FooterHeader>Shooooooot me a message!</FooterHeader>
                </FooterDetails>
            </FooterCard>
        </FooterWrapper>
    )
}
export default Footer