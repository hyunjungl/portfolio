import styled from "styled-components";

export default function Skills() {
  return (
    <Container>
      <Block1>
        <Box1></Box1>
        <Box2></Box2>
        <Box3></Box3>
        <Box4></Box4>
        <Box5></Box5>
      </Block1>

      <Block2>
        <Box6></Box6>
        <Box7></Box7>
        <Box8></Box8>
      </Block2>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 100px;
`;
const Block1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Box1 = styled.div`
  width: 70px;
  height: 70px;
  background: url(${require("../img/html.png")});
  background-size: cover;
  background-repeat: none;
`;
const Box2 = styled.div`
  width: 70px;
  height: 70px;
  background: url(${require("../img/CSS3.png")});
  background-size: cover;
  background-position: 50%;
  margin-left: 20px;
`;

const Box3 = styled.div`
  width: 70px;
  height: 70px;
  background: url(${require("../img/JavaScript.png")});
  background-size: cover;
  background-position: 50%;
  margin-left: 20px;
`;

const Block2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
`;
const Box4 = styled.div`
  width: 70px;
  height: 70px;
  background: url(${require("../img/sass.png")});
  background-size: cover;
  background-position: 50%;
  margin-left: 20px;
`;

const Box5 = styled.div`
  width: 70px;
  height: 70px;
  background: url(${require("../img/react.webp")});
  background-size: cover;
  background-position: 50%;
  margin-left: 20px;
`;

const Box6 = styled.div`
  width: 70px;
  height: 70px;
  background: url(${require("../img/git.png")});
  background-size: 100%;
  background-position: 100%;
`;
const Box7 = styled.div`
  width: 200px;
  height: 70px;
  background: url(${require("../img/recoil.png")});
  background-size: cover;
  background-position: 100%;
  margin-left: 20px;
`;
const Box8 = styled.div`
  width: 70px;
  height: 70px;
  background: url(${require("../img/redux.png")});
  background-size: cover;
  background-position: 100%;
  margin-left: 20px;
`;
