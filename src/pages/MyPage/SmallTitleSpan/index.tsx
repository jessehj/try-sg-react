import React from "react";
import Span from "../../../components/Span";

const SmallTitleSpan: React.FC = function SmallTitleSpan({ children }) {
  return (
    <Span
      fontWeight="normal"
      fontSize="14px"
      lineHeight="20px"
      margin="12px 0px"
      textAlign="left"
    >
      {children}
    </Span>
  );
};

export default SmallTitleSpan;
