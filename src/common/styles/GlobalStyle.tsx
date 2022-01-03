import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

export const bodyStyle = css`
  box-sizing: border-box;
  font-family: "Noto Sans KR", sans-serif;
  color: #262626;
  -webkit-overflow-scrolling: touch;
`;

const GlobalStyles = createGlobalStyle`
	${reset}
	
	h1,h2,h3,h4,h5,h6 {
		margin :0
	}
	
	body {
	  ${bodyStyle}
	}	

	div {
	  box-sizing: border-box;
	}
`;

export default GlobalStyles;
