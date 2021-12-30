import React from "react";
import StyledForm from "./style";
import { FormProps } from "./interface";

const Form: React.FC<FormProps> = function Form({
  width,
  height,
  border,
  margin,
  children,
}: FormProps) {
  return (
    <StyledForm width={width} height={height} border={border} margin={margin}>
      {children}
    </StyledForm>
  );
};

export default Form;
