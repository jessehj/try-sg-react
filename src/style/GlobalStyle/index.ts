import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
     ${reset};
     
     body{
       box-sizing:border-box;
         font-family:Noto Sans CJK KR;
         font-size: 14px;
         background-color:#FFFFFF;
       
       
       @media (max-width: 767px){
         background-color: #fafafa;
       }
     }
     .quill{
       height:100%;
     }
 `;
export default globalStyles;
