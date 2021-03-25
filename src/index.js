import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { theme } from "./themes/theme";

const images = [
  "https://raw.githubusercontent.com/Jonnylie/react-portfolio/master/src/images/image1.jpg",
  "https://raw.githubusercontent.com/Jonnylie/react-portfolio/master/src/images/image2.jpg",
  "https://raw.githubusercontent.com/Jonnylie/react-portfolio/master/src/images/image.jpg",
];

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App images={images} />
  </ThemeProvider>,
  document.getElementById("root")
);
