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
      <ul>
        <li
          onClick={() => {
            handleIndex(0);
          }}
        >
          Home
        </li>
        <li
          onClick={() => {
            handleIndex(1);
          }}
        >
          About
        </li>
        <li
          onClick={() => {
            handleIndex(2);
          }}
        >
          Projects
        </li>
        <li
          onClick={() => {
            handleIndex(3);
          }}
        >
          Contact
        </li>
      </ul>
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
  ul {
    display: flex;
    justify-content: end;
    align-items: center;
    height: 60px;
    color: white;
    font-size: 20px;
    bottom: 0;
    padding-right: 50px;
    /* background: royalblue; */
    /* border-bottom: 3px solid #04c2c9; */
  }
  li + li {
    margin-left: 50px;
  }
`;
