import styled from 'styled-components'
import TerminalCard from './TerminalCard';
import { useEffect } from 'react';
import { DotTray, RedDot, GreenDot, YellowDot } from './IntroCard';
import { useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

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

const BlogWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`;

const BlogHeaderText = styled.h3`
   font-family: sans-serif;
   margin: 10px;
   text-overflow: ellipsis;
`;

const BlogCard = styled.div`
   width: 262.31px;
   height: 250px;
   border-radius: 16px;
   /* border: 1px solid black; */
   margin-right: 5px;
   box-shadow: 0px 30px 30px rgba(0, 0, 0, 0.05);
   border-radius: 15px;
`;



function MidCard() {
  const [Blogs, setBlogs] = useState([])
  useEffect(() => {
    fetch("https://dev.to/api/articles?username=codejesse")
      .then(data => data.json())
      .then(data => {
        setBlogs(data)
      })
  }, [])

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  console.log(Blogs)

  return (
    <MidCardContainer>
      <TerminalCard />
      <StatsCard data-aos="fade-down" data-aos-duration="2000">
        <DotTray>
          <RedDot />
          <YellowDot />
          <GreenDot />
        </DotTray>
        <BlogWrapper>
          {Blogs && Blogs.map((posts, id) => {
            <BlogCard key={id}>
              <BlogHeaderText>{posts.description}</BlogHeaderText>
            </BlogCard>
          })}
          <BlogCard></BlogCard>
        </BlogWrapper>
      </StatsCard>
    </MidCardContainer>
  )
}
export default MidCard;
