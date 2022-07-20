import styled from 'styled-components'
import ProjectsTray from './ProjectsTray';

const NavWrapper = styled.div`
   display: flex;
   justify-content: center;
   width: 100%;
   height: 65px;
   background: rgba(234, 234, 234, 0.3);
   backdrop-filter: blur(10px);
   position: fixed;
   &:hover {
    height: 150px;
    transition: 0.3s ease-in-out;
   }
`;

const NameChip = styled.div`
  margin: auto;
  padding: auto;
  width: 179px;
  height: 53px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  color: white;
  text-align: center;
`;

const NameTag = styled.p`
  display: flex;
  justify-content: center;
  color: white;
  font-family: sans-serif;
  font-size: 20px;
`;

const NavIcon = styled.div`
  float: right;
  color: white;
  padding-right: 1rem;
  padding-top: 10px;
  cursor: pointer;
`;



function Navbar() {
  return (
    <NavWrapper>
      <NameChip>
        <NameTag>Jesse</NameTag>
      </NameChip>
      <NavIcon><img src='plus.png' alt='plus-icon' height="30px" width="30px" /></NavIcon>
      {/* <ProjectsTray /> */}
    </NavWrapper>
  )
}
export default Navbar;
