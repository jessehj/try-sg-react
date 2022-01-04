import React from "react";
import Span from "../../../components/Span";

const SmallTitleSpan: React.FC = function SmallTitleSpan({ children }) {
  return (
    <Span
      fontWeight="normal"
      fontSize="14px"
      lineHeight="20px"
      margin="20px 0 12px 0"
      textAlign="left"
    >
      {children}
    </Span>
  );
};

export default SmallTitleSpan;
