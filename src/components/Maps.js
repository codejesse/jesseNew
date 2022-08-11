import styled from "styled-components"
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const MapsWrapper = styled.div`
    display: flex;
    @media (max-width: 800px) {
        margin: auto;
    }
`;

const MapsCard = styled.div`
   width: 373px;
   height: 374px;
   background: #FFFFFF;
   border: 1px solid #B1B1B1;
   box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
   border-radius: 50px;
`;

const ImageHolder = styled.div`
   display: flex;
   justify-content: center;
   padding: 4rem;
`;

const Texttest = styled.h1`
  color:  black;
  margin-top: -2rem;
  text-align: center;
  font-family: "Open sans", sans-serif;
`;

function Maps() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <MapsWrapper>
            <MapsCard data-aos="fade-down" data-aos-duration="1000">
                <ImageHolder>
                    <img data-aos="zoom-in" data-aos-duration="2000" src="jesse3.jpeg" alt="map-img" width="140px" height="140px" style={{borderRadius: "360px", border: "1px solid grey"}} />
                </ImageHolder>
                <Texttest>Locate Me</Texttest>
            </MapsCard>
        </MapsWrapper>
    )
}
export default Maps;