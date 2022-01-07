import React from "react";
import { InputInnerWrapper, InputWrapper } from "./style";
import { IInputType } from "../Type";
import Notice from "../Notice";

const FormInput = ({
  type,
  valueId,
  placeholder,
  value,
  onChange,
  children,
  message,
  isError,
  validateCheck,
  ...rest
}: IInputType) => {
  return (
    <>
      <InputWrapper {...rest} value={value}>
        <InputInnerWrapper
          isError={isError}
          type={type}
          placeholder={placeholder}
          valueId={valueId}
          value={value}
          onChange={onChange}
          validateCheck={validateCheck}
        />
        {children}
      </InputWrapper>
      {message && (
        <Notice
          isError={valueId === "pwd" ? true : isError}
          message={message}
        />
      )}
    </>
  );
};

export default FormInput;
