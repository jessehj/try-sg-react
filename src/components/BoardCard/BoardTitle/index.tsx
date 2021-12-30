import React from "react";
import Span from "../../Span";

const BoardTitle: React.FC = function BoardTitle({ children }) {
  return (
    <Span
      fontWeight="bold"
      fontSize="14px"
      lineHeight="24px"
      margin="12px 0px"
      textAlign="left"
    >
      {children}
    </Span>
  );
};
export default BoardTitle;
