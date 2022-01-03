import React from "react";
import styled from "styled-components";

export interface SectionProps {
  top?: string;
  children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = function Section({ top, children }) {
  return <StyledSection top={top}>{children}</StyledSection>;
};

export default Section;

const StyledSection = styled.section<SectionProps>`
  position: relative;
  width: 100%;
  top: ${({ top }) => {
    if (top) return top;
    return "80px";
  }};

  height: fit-content;
  display: flex;
  justify-content: center;
`;
