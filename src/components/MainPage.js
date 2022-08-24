import styled from "styled-components";
import Navigation from "./Navigation";

export default function MainPage() {
  return (
    <>
      <Block />
      <Second>
        <Navigation />
        <p>ABOUT</p>
        <p></p>
      </Second>
      <Third>
        <p>SKILLS</p>
      </Third>
      <Fourth>
        <p>PROJECTS</p>
      </Fourth>s
      <Fifth>
        <p>CONTACT</p>
      </Fifth>
    </>
  );
}

const Block = styled.div`
  width: 100vw;
  height: 700px;
  background: url(${require("../img/mainw.jpg")});
  background-size: cover;
  background-position:  100%;
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
