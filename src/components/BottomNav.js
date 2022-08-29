import styled from "styled-components";

const BottomNavContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    position: fixed;
    overflow: hidden;
    bottom: 0;
    margin-bottom: 1rem;
    z-index: 999;
    @media (max-width: 800px) {
      width: 100%;
    }
`;

const BottomNavWrapper = styled.div`
   display: flex;
   justify-content: space-around;
   margin: auto;
   width: 496px;
   height: auto;
   left: 508px;
   top: 840px;
   background: rgba(203, 203, 203, 0.5);
   border: 0.5px solid #ADADAD;
   backdrop-filter: blur(9px);
border-radius: 25px;
  @media (max-width: 600px) {
    margin: 15px;
    width: 100%;
  }
`;

const ToolTip = styled.div`
  position: relative;
  display: block;
  /* border: 1px solid black; */
  &:hover {
    visibility: visible;
  }
`;

const ToolTipText = styled.p`
  visibility: hidden;
  width: 120px;
  margin-top: -20px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  /* visibility: visible; */
`;

function BottomNav() {
    return (
        <BottomNavContainer>
            <BottomNavWrapper>
                <ToolTip>
                    <ToolTipText>Finder</ToolTipText>
                    <img title='Finder' src="/finder.png" alt="finder-icon" width="80px" height="80px" />
                </ToolTip>
                <img title='Terminal' src="/Terminal.png" alt="finder-icon" width="80px" height="80px" />
                <img title='Voiceme' src="/img1.png" alt="-icon" width="90px" height="80px" />
                <img title='Mail' src="/Mail.png" alt="mail-icon" width="80px" height="80px" />
                <img title='Message' src="/Github.png" alt="spotify-icon" width="70px" height="70px" />
            </BottomNavWrapper>
        </BottomNavContainer>
    )
}
export default BottomNav;