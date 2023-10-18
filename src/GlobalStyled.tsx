import { createGlobalStyle } from 'styled-components';
  
  export const GlobalStyle = createGlobalStyle`

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Helvetica;
    }
    
    body {
      background-color: #ffffff;
      color: #1D1F26;
    }

    img {
      width: 100%;
    }

    a {
      text-decoration: none;
      color: #EFC026;
      transition: .5s;
    }

    a:hover {
      color: #b8930c;
    }
  `