import styled from "styled-components";

export default function Skills() {
  return (
    <Block>
      <div>
        <div id="box1"></div>
        <div id="box2"></div>
        <div id="box3"></div>
      </div>
      <div>
        <div id="box4"></div>
        <div id="box5"></div>
        <div id="box6"></div>
      </div>
    </Block>
  );
}

const Block = styled.div`
  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    #box1 {
      width: 50px;
      height: 50px;
      background: url(${require("../img/html.png")});
      background-size: cover;
      background-repeat: none;
    }
    #box2 {
      width: 50px;
      height: 50px;
      background: url(${require("../img/CSS3.png")});
      background-size: cover;
      background-position: 50%;
      margin-left: 20px;
    }
    #box3 {
      width: 50px;
      height: 50px;
      background: url(${require("../img/JavaScript.png")});
      background-size: cover;
      background-position: 50%;
      margin-left: 20px;
    }
  }
  div {
    #box4 {
      width: 50px;
      height: 50px;
      background: url(${require("../img/sass.png")});
      background-size: cover;
      background-position: 50%;
    }
    #box5 {
      width: 50px;
      height: 50px;
      background: url(${require("../img/react.webp")});
      background-size: cover;
      background-position: 50%;
      margin-left: 20px;
    }
    #box6 {
      width: 50px;
      height: 50px;
      background: url(${require("../img/git.png")});
      background-size: cover;
      background-position: 100%;
      margin-left: 20px;
    }
  }
`;
