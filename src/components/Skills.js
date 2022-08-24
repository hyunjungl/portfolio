import styled from "styled-components";

export default function Skills() {
  return <Block>
    <div id="box1"></div>
    <div id="box2"></div>
    <div id="box3"></div>
    <div id="box4"></div>
    <div id="box5"></div>
    <div id="box6"></div>
  </Block>;
  
}

const Block = styled.div`
display: flex;
justify-content: center;

#box1 {width: 100px;
height: 100px;
background: url(${require("../img/html.png")});
background-size: cover;
background-position:  50%;
}
 #box2 {
  width: 100px;
  height: 100px;
  background: url(${require("../img/sass.png")});
  background-size: cover;
  background-position:  50%;
 }

`;
