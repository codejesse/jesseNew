import './App.css';
import styled from 'styled-components'
import IntroCard from './components/IntroCard';
import Navbar from './components/Navbar';
import MidCard from './components/MidCard';
import BottomNav from './components/BottomNav';
import ProjectsList from './components/ProjectsList';
import Footer from './components/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

export const AppWrapper = styled.div`
   background-image: url("/background-2.jpg");
   background-repeat: no-repeat;
   background-size: cover;
   overflow: hidden;
   height: auto;
`;

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <AppWrapper >
      <Navbar />
      <IntroCard />
      <MidCard />
      <ProjectsList />
      <BottomNav />
      <Footer />
    </AppWrapper>
  );
}

export default App;
