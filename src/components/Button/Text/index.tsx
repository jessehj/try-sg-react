import React from "react";
import ButtonText from "./style";
import ButtonProps from "../interface";

const Text: React.FC<ButtonProps> = function Text({ btnType, children }) {
  return <ButtonText btnType={btnType}>{children}</ButtonText>;
};
export default Text;
