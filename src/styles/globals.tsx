import { normalize } from "polished";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
${normalize()}

body {
  @font-face {
    font-family: 'Roboto';
    font-display: auto;
    src: local('Roboto');
  }
  font-family: fontstack, sans-serif;
}
`;
