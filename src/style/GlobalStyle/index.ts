import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
     ${reset};
     
     body{
         font-family:Noto Sans CJK KR;
         font-size: 14px;
         background-color:#FFFFFF;
          padding:0px;
     }
 `;
export default globalStyles;
