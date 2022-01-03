import styled from "styled-components";
import SpanProps from "./_interface";

const StyledSpan = styled.span<SpanProps>`
  font-size: ${({ fontSize }) => {
    if (fontSize) return fontSize;
    return "16px";
  }};
  font-style: ${({ fontStyle }) => {
    if (fontStyle) return fontStyle;
    return "normal";
  }};
  font-weight: ${({ fontWeight }) => {
    if (fontWeight) return fontWeight;
    return "500";
  }};
  line-height: ${({ lineHeight }) => {
    if (lineHeight) return lineHeight;
    return "20px";
  }};
  text-align: ${({ textAlign }) => {
    if (textAlign) return textAlign;
    return "center";
  }};

  color: ${({ color }) => {
    if (color) return color;
    return "black";
  }};
  margin: ${({ margin }) => {
    if (margin) return margin;
    return "0 0 0 0";
  }};
  width: ${({ width }) => {
    if (width) return width;
    return "100%";
  }};
`;

export default StyledSpan;
