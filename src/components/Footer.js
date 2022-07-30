import styled from "styled-components";
import { DotTray, GreenDot, RedDot, YellowDot } from "./IntroCard";
import { FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa"

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
   background-image: url("/vector2.png");
   background-repeat: no-repeat;
   background-position: right;
   background-position-y: -1rem;
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

const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterHeader = styled.h2`
   font-family: "Open sans", sans-serif;
   font-style: italic;
   font-weight: 700;
   font-size: 2rem;
`;

const SocialWrapper = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   width: 40%;
   margin-top: -20px;
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
                    <img src="jesse1.png" width="200px" alt="footer-pic" />
                    <FooterRight>
                        <FooterHeader>Shooooo🥷🏾t me a message!</FooterHeader>
                        <SocialWrapper>
                            <FaGithub size={30}/>
                            <FaTwitter size={30}/>
                            <FaEnvelope size={30}/>
                        </SocialWrapper>
                    </FooterRight>
                </FooterDetails>
            </FooterCard>
        </FooterWrapper>
    )
}
export default Footer