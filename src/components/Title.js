import styled, { keyframes } from "styled-components";
import React from "react";
import { useSetRecoilState } from "recoil";
import { slideState } from "../atoms/slide";

export default function Title() {
  const setIndex = useSetRecoilState(slideState);

  function handleIndex(index) {
    setIndex(index);
  }
  return (
    <TitleContainer>
      <TitleLists>
        <TitleItem>FRONT-END DEV.</TitleItem>
        <TitleItem>Im Hyun Jung</TitleItem>
        <MenuBox>
          {/* <Button>ABOUT</Button> */}
          <Button
            onClick={() => {
              handleIndex(2);
            }}
          >
            View my Projects
          </Button>
          {/* <Button>CONTACT</Button> */}
        </MenuBox>
      </TitleLists>
    </TitleContainer>
  );
}

const TitleContainer = styled.div`
  animation-fill-mode: forwards;
`;

const bounce = keyframes`
 0% {
    transform:  translateY(200px) scale(0); 
  }
  100% {
    transform:  translateY(0) scale(1);
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
