import MainPage from "./components/MainPage";
import { createGlobalStyle } from "styled-components";
import Skills from "./components/Skills";
import React from "react";
import { BrowserRouter as router, route, switch, link } from "react-router-dom";

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
      <MainPage>
        <Skills />
      </MainPage>
    </>
  );
}

export default App;
