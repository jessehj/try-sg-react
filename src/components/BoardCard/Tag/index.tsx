import React from "react";
import StyledTag from "./style";

const Tag: React.FC = function Tag({ children }) {
  return <StyledTag>{children}</StyledTag>;
};
export default Tag;
