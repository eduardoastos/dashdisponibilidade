import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  html, body, div, span {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  h1 {
    margin: 0;
    padding: 0;
  }

  body {
    line-height: 1;
    margin: 0;
    width: 100%;
    height: 100vh;
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
  }
  
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;
