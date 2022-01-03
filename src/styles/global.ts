import { createGlobalStyle } from "styled-components";
import { GRAY01 } from "./Variables";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif;
    }
    body{
      
    }
    #root{
        min-height: 100vh;
        background-color: ${GRAY01};
    }
 `;

export default GlobalStyle;
