import styled from "styled-components";

export interface FlexContainerProps {
  direction?: string;
  alignItems?: string;
  justifyContent?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  margin?: string;
  padding?: string;
  flex?: string;
}

const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  z-index: 10;
  padding: ${({ padding }) => {
    if (padding) return padding;
    return "0px";
  }};
  flex-direction: ${({ direction }) => {
    if (direction) return direction;
    return "row";
  }};
  align-items: ${({ alignItems }) => {
    if (alignItems) return alignItems;
    return "center";
  }};
  align-content: ${({ alignItems }) => {
    if (alignItems) return alignItems;
    return "center";
  }};
  justify-content: ${({ justifyContent }) => {
    if (justifyContent) return justifyContent;
    return "center";
  }};
  width: ${({ width }) => {
    if (width) return width;
    return "100%";
  }};
  height: ${({ height }) => {
    if (height) return height;
    return "100vh";
  }};
  background-color: ${({ backgroundColor }) => {
    if (backgroundColor) return backgroundColor;
    return "#FFFFFF";
  }};
  flex: ${({ flex }) => {
    if (flex) return flex;
    return "none";
  }};
  margin: ${({ margin }) => {
    if (margin) return margin;
    return "0 0 0 0";
  }};
`;
export default FlexContainer;
