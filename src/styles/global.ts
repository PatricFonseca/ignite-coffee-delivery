import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    background-color: #FAFAFA;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button, p {
    font-family: 'Roboto', sans-serif;
    /* font-weight: 400; */
  }

  button{
    cursor: pointer;
    border: none;
  }
`;
