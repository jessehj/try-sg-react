import styled from "styled-components";
import CircleImageProps from "./interface";

const StyledCircleImage = styled.div<CircleImageProps>`
  background-image: ${({ src }) => `url(${src})`};
  background-repeat: no-repeat;
  background-size: contain;
  width: ${({ width }) => {
    if (width) return width;
    return "80px";
  }};
  height: ${({ height }) => {
    if (height) return height;
    return "80px";
  }};
  max-width:${({ width }) => {
    if (width) return width;
    return "80px";
  }};
  max-height: ${({ height }) => {
    if (height) return height;
    return "80px";
  }};
  margin:${({ margin }) => {
    if (margin) return margin;
    return "0 0 0 0";
  }};
  }
`;

export default StyledCircleImage;
