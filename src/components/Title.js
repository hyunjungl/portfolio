import styled, { keyframes } from "styled-components";
import React from "react";

export default function Title() {
  return (
    <TitleContainer>
      <TitleLists>
        <TitleItem>FRONT-END DEV.</TitleItem>
        <TitleItem>Im Hyun Jung</TitleItem>
        <MenuBox>
          {/* <Button>ABOUT</Button> */}
          <Button>View my Projects</Button>
          {/* <Button>CONTACT</Button> */}
        </MenuBox>
      </TitleLists>
    </TitleContainer>
  );
}

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* padding-top: 200px; */
  height: 100vh;
  font-size: 100px;
  color: #fff;
  animation-fill-mode: forwards;
`;

const bounce = keyframes`
 0% {
    transform:  scale(0); 
  }
  100% {
    transform:  scale(1);
  }


`;

const TitleLists = styled.div`
  animation: ${bounce} 1s;
  /* transform: scale(0.5); */
`;

const TitleItem = styled.div``;

const MenuBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 150px;
`;

const Button = styled.button`
  width: 250px;
  height: 60px;
  font-size: 25px;
  border: 1px solid white;
  border-radius: 10px;
  cursor: pointer;
  background: black;
  color: white;
`;
