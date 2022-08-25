import styled from "styled-components";
import Navigation from "./Navigation";
import SectionMove from "./SectionMove";
import Skills from "./Skills";
import { RiKakaoTalkFill } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";
import { VscMail } from "react-icons/vsc";
import { BsGithub } from "react-icons/bs";

export default function MainPage() {
  return (
    <>
      <Header id="scroll-container"></Header>
      <Second id="1">
        <SectionMove />
        <Navigation />
        <p>ABOUT</p>
        <p></p>
      </Second>
      <Third id="2">
        <p>SKILLS</p>
        <Skills />
      </Third>
      <Fourth id="3">
        <p>PROJECTS</p>
      </Fourth>
      <Fifth id="4">
        <h1>CONTACT</h1>
        <div id="box1">
          <div id="phone">
            <FiPhone />
            010.9112.7755
          </div>
          <div id="mail">
            <VscMail />
            amandalhj@kakao.com
          </div>
        </div>
        <div id="box2">
          <RiKakaoTalkFill size={50} />
          <BsGithub size={50} />
        </div>
      </Fifth>
    </>
  );
}

const Header = styled.div`
  width: 100vw;
  height: 900px;
  background: url(${require("../img/beach.jpg")});
  background-size: cover;
  background-position: 80% 90%;
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
  align-items: center;
  flex-flow: column;
  position: relative;
  width: 100vw;
  height: 300px;
  border-top: 1px solid black;
  h1 {
    position: absolute;
    top: 10px;
  }
  #box1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    margin-right: 200px;
    border-right: 3px dashed black;
    padding: 30px;
    div {
      font-size: 25px;
      font-weight: 600;
      display: flex;
    }
  }
  #box2 {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    position: absolute;
    padding-left: 300px;
  }
`;
