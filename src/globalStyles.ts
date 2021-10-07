import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: Open-Sans, Helvetica, Sans-Serif;
    color: rgba(20, 20, 20, 1);
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
