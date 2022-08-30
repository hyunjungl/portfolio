import styled, { css } from "styled-components";
import { useState, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { sectionIdx } from "../App";
import { slideState } from "../atoms/slide";

export default function Navigation() {
  //네비게이션 스크롤시 나타남
  const [scrollY, setScrollY] = useState(0);
  const setIndex = useSetRecoilState(slideState);
  // const [scrollActive, setScrollActiove] = useState(false);
  function handleIndex(index) {
    setIndex(index);
  }
  function handleScroll() {
    setScrollY(window.scrollY);
    // console.log(scrollY);
  }
  // console.log(window.innerHeight);
  useEffect(() => {
    function scrollListener() {
      window.addEventListener("scroll", handleScroll);
    }
    scrollListener();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <NavBlock active={scrollY >= window.innerHeight}>
      <NavList>
        <NavItem
          onClick={() => {
            handleIndex(0);
          }}
        >
          Home
        </NavItem>
        <NavItem
          onClick={() => {
            handleIndex(1);
          }}
        >
          About
        </NavItem>
        <NavItem
          onClick={() => {
            handleIndex(2);
          }}
        >
          Projects
        </NavItem>
        <NavItem
          onClick={() => {
            handleIndex(3);
          }}
        >
          Contact
        </NavItem>
      </NavList>
    </NavBlock>
  );
}

const NavBlock = styled.nav`
  /* position: fixed; */
  display: none;
  top: 0;
  z-index: 1;
  width: 100%;
  ${({ active }) =>
    active &&
    css`
      & {
        position: fixed;
        display: block;
        top: 0;
        background-color: rgba(0, 0, 0, 0.2);
        text-color: white;
        transition: 1s;
      }
    `}
`;
const NavList = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 60px;
  color: white;
  font-size: 20px;
  bottom: 0;
  padding-right: 50px;
`;
const NavItem = styled.div`
  margin-left: 50px;
  cursor: pointer;
`;
