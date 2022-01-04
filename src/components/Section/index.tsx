import React from "react";
import styled from "styled-components";
import { FROM_TABLET_TO_PHONE, MediaQueries } from "../../style/MediaQueries";

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
  ${MediaQueries(FROM_TABLET_TO_PHONE)}{
    top:${({ top }) => {
      if (top) return top;
      return 0;
    }}
`;
