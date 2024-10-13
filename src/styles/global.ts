import { createGlobalStyle } from "styled-components";
import Redwing from "./fonts/Redwing-Medium.otf";

export const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: "Redwing";
    src: url(${Redwing}) format("opentype");
    font-weight: 400;
  }

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

:focus {
    outline: 0;
}

section{
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 3rem;
}

html,
body {
    overflow-x: hidden;
}

body {
    background-color: ${(props) => props.theme["background"]};
    color: ${(props) => props.theme["white"]};
}

body,
input,
textarea {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 16px;
}

h1,
h2,
h3,
button {
  font-family: "Redwing", sans-serif;
}

.colorStyle {
  color: ${(props) => props.theme["purple-100"]};
}

.fontStyle {
  font-size: 1.1rem;
}

@media screen and (max-width: 1100px) {
  html {
    font-size: 87.5%;
  }
}

`;
