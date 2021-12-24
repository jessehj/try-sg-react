import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { Theme } from "../constants/theme";

const globalStyle = createGlobalStyle`
  ${reset};
  background-color: ${Theme.Colors.GRAY_ONE};
`;

export default globalStyle;
