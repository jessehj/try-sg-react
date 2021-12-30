import React from "react";
import StyledInput from "./styles";
import InputProps from "./interface";

const Input: React.FC<InputProps> = function Input({
  width,
  height,
  margin,
  inputName,
  children,
}) {
  return (
    <StyledInput
      width={width}
      height={height}
      margin={margin}
      placeholder={inputName}
      name={inputName}
    >
      {children}
    </StyledInput>
  );
};

export default Input;
