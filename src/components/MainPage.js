import styled from "styled-components";
import Navigation from "./Navigation";
import SectionMove from "./SectionMove";
import Projects from "./Projects";
import Title from "./Title";
import About from "./About";
import Contact from "./Contact";

export default function MainPage() {
  return (
    <>
      <Header id="scroll-container">
        <Title />
      </Header>

      <Second>
        <SectionMove />
        <Navigation />
        <p>ABOUT</p>
        <About />
      </Second>

      <Third>
        <p>PROJECTS</p>
        <Projects />
      </Third>

      {/* <Footer><Contact /></Footer> */}
    </>
  );
}

const Header = styled.div`
  width: 100vw;
  height: 100vh;
  /* background: url(${require("../img/fire.jpg")}); 
  background-size: 100%; 
  background-repeat: no-repeat;  
  background-position: 80%; */
  background-color: #000;
  overflow: hidden;
`;

const Second = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
  p {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    font-size: 40px;
  }
`;

const Third = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  p {
    margin: 50px 0;
    font-size: 40px;
  }
`;

// const Footer = styled.div`
//   width: 100vw;
//   height: 300px;
//   border-top: 1px solid black;
// `;
