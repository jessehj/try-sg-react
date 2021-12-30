import React from "react";
import Span from "../../Span";

const BoardExplain: React.FC = function BoardExplain({ children }) {
  return (
    <Span
      fontWeight="normal"
      fontSize="12px"
      lineHeight="18px"
      margin="12px 0px"
      textAlign="left"
    >
      {children}
    </Span>
  );
};
export default BoardExplain;
