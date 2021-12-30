import styled from "styled-components";
import { FormProps } from "./interface";

const StyledForm = styled.form<FormProps>`
  position: relative;
  width: ${({ width }) => {
    if (width) return width;
    return "inherit";
  }};
  height: ${({ height }) => {
    if (height) return height;
    return "100%";
  }};
  border: ${({ border }) => {
    if (border) return border;
    return "none";
  }};
`;

export default StyledForm;
