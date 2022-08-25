import MainPage from "./components/MainPage";
import { createGlobalStyle } from "styled-components";
import Skills from "./components/Skills";
import React from "react";
import { RecoilRoot, atom } from "recoil";

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
  return (
    <>
      <GlobalStyle />
      <RecoilRoot>
        <MainPage>
          <Skills />
        </MainPage>
      </RecoilRoot>
    </>
  );
}

export default App;
