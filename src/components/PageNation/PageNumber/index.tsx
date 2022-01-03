import React from "react";
import styled from "styled-components";
import StyledSpan from "../../Span/style";
import SpanProps from "../../Span/_interface";

interface PageNumberProps extends SpanProps {
  onClick?: (e: React.MouseEvent) => void;
  isNowPage?: boolean;
}
const PageNumber: React.FC<PageNumberProps> = function PageNumber({
  children,
  onClick,
  isNowPage,
}) {
  return (
    <StyledPageNumber
      fontStyle="normal"
      fontWeight="normal"
      fontSize="16px"
      lineHeight="24px"
      margin="0 0px"
      onClick={onClick}
      isNowPage={isNowPage}
    >
      {children}
    </StyledPageNumber>
  );
};
export default PageNumber;

const StyledPageNumber = styled(StyledSpan)<PageNumberProps>`
  cursor: pointer;
  color: ${({ isNowPage }) => {
    if (isNowPage) return "#2E65C5";
    return "#B0CBFB";
  }};
  border-bottom: ${({ isNowPage }) => {
    if (isNowPage) return `2px solid #B0CBFB`;
    return "none";
  }};
  width: unset;
`;
