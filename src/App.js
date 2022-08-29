import MainPage from "./components/MainPage";
import { createGlobalStyle } from "styled-components";
import Skills from "./components/Skills";
import React, { useEffect } from "react";
import { atom } from "recoil";
import useWheel from "./hooks/useWheel";

export const sectionIdx = atom({
  key: "sectionIdx",
  default: 0,
});

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding : 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  li {
    list-style: none;
  }
`;

function App() {
  const index = useWheel(5);
  console.log(index);
  useEffect(() => {
    window.scrollTo({ top: window.innerHeight * index, behavior: "smooth" });
  }, [index]);
  return (
    <>
      <GlobalStyle />
      <MainPage>
        <Skills />
      </MainPage>
    </>
  );
}

export default App;
