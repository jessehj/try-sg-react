import styled from "styled-components";
import IconButtonProps from "./_interface";

const StyledIconButton = styled.div<IconButtonProps>`
  background-image: ${({ src }) => {
    if (src) return `url(${src})`;
    return "none";
  }};
  max-width: ${({ width }) => {
    if (width) return width;
    return "24px";
  }};
  background-repeat: no-repeat;
  background-size: contain;
  width: ${({ width }) => {
    if (width) return width;
    return "24px";
  }};
  height: ${({ height }) => {
    if (height) return height;
    return "24px";
  }};
  margin: ${({ margin }) => {
    if (margin) return margin;
    return "13px 24px 13px 15px";
  }};
  cursor: pointer;
`;

export default StyledIconButton;
