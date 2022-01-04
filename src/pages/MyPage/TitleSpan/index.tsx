import React from "react";
import Span from "../../../components/Span";

const TitleSpan: React.FC = function TitleSpan({ children }) {
  return (
    <Span
      fontWeight="700"
      fontSize="18px"
      lineHeight="27px"
      margin="32px 0px 20px 0"
      textAlign="left"
    >
      {children}
    </Span>
  );
};
export default TitleSpan;
