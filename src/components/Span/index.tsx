import React from "react";
import SpanProps from "./_interface";
import StyledSpan from "./style";

const Span: React.FC<SpanProps> = function Span({
  fontSize,
  fontWeight,
  fontStyle,
  lineHeight,
  textAlign,
  children,
  color,
  margin,
  width,
}) {
  return (
    <StyledSpan
      fontSize={fontSize}
      fontWeight={fontWeight}
      fontStyle={fontStyle}
      lineHeight={lineHeight}
      textAlign={textAlign}
      color={color}
      margin={margin}
      width={width}
    >
      {children}
    </StyledSpan>
  );
};
export default Span;
