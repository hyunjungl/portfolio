import styled from "styled-components";
import Contact from "./Contact";
import Navigation from "./Navigation";
import Skills from "./Skills";

export default function MainPage() {
  
  return (
    <>
      <Block id="scroll-container"/>
      <Second id="section1">
        <Navigation />
        <p>ABOUT</p>
        <p></p>
      </Second>
      <Third id="section2">
        <p>SKILLS</p>
        <Skills/>
      </Third>
      <Fourth id="section3">
        <p>PROJECTS</p>
      </Fourth>
      <Fifth id="section4">
        <p>CONTACT</p>
        <Contact />
      </Fifth>
    </>
  );
}

const Block = styled.div`
  width: 100vw;
  height: 700px;
  background: url(${require("../img/main.jpg")});
  background-size: cover;
  background-position:  50%;

`;

const Second = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 800px;
  background: white;

  p {
    margin-top: 80px;
    font-size: 40px;
  }
`;

const Third = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 900px;
  p {
    margin-top: 50px;
    font-size: 40px;
  }
`;
const Fourth = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 900px;
  p {
    margin-top: 50px;
    font-size: 40px;
  }
`;

const Fifth = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 900px;
  p {
    margin-top: 50px;
    font-size: 40px;
  }
`;
