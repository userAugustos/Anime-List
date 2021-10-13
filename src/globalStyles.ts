import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: Open-Sans, Helvetica, Sans-Serif;
    color: rgba(250, 250, 250, 1);
    background: #121212;

  }

  #root{
    min-height: 100vh;
  }

  li, a{
    list-style: none;
    text-decoration: none;
  }

`;

export default GlobalStyles;
