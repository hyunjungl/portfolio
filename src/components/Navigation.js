import styled, { css } from "styled-components";
import { useState, useEffect } from "react";
import { slideState } from "../atoms/slide";
import { useSetRecoilState } from 'recoil';


export default function Navigation() {
  const [scrollY, setScrollY] = useState(0);
  // const [scrollActive, setScrollActiove] = useState(false);

  function handleScroll() {
    setScrollY(window.scrollY);
    console.log(scrollY);
  }
  console.log(window.innerHeight);
  useEffect(() => {
    function scrollListener() {
      window.addEventListener("scroll", handleScroll);
    }
    scrollListener();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  window.addEventListener("scroll")
  const setIndex = useSetRecoilState(slideState);

  return (
    <NavBlock active={scrollY > window.innerHeight}>
      <ul>
        <Li onClick={() => setIndex((index) => index + 1)} >About</Li>
        <Li onClick={() => setIndex((index) => index + 1)}>Skills</Li>
        <Li onClick={() => setIndex((index) => index + 1)}>Projects</Li>
        <Li onClick={() => setIndex((index) => index + 1)}>Contact</Li>
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
    height: 70px;
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

const Ul=styled.div`

`
const Li =styled.div``