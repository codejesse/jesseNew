import styled from 'styled-components'
import TerminalCard from './TerminalCard';
import { DotTray, RedDot, GreenDot, YellowDot } from './IntroCard';

const MidCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 12px;
   justify-content: center;
   padding-top: 2rem;
   @media (max-width: 800px) {
     flex-direction: column;
     margin: 20px;
   }
`;

const StatsCard = styled.div`
    background: #FFFFFF;
   margin-right: 3rem;
   border: 1px solid #B1B1B1;
   box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
   border-radius: 20px;
   width: 50%;
   height: 320px;
   @media (max-width: 1200px) {
    background-image: none;
    width: 100%;
    margin-bottom: 2rem;
  }
`;

const StatsText = styled.h2`
  margin: 135px;
  color: black;
  font-family: "Open sans", sans-serif;
  @media (max-width: 1200px) {
    margin: auto;
  }
`;



function MidCard() {
    return (
        <MidCardContainer>
            <TerminalCard />
            <StatsCard>
                <DotTray>
                    <RedDot />
                    <YellowDot />
                    <GreenDot />
                </DotTray>
                <StatsText title='Blog posts'>📝Github stats and blog posts here</StatsText>
            </StatsCard>
        </MidCardContainer>
    )
}
export default MidCard;
