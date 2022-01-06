import React from "react";
import { IInputType } from "../Type";
import InputWrapper from "./style";

const Input = ({
  type,
  valueId,
  placeholder,
  value,
  onChange,
  validateCheck,
  isError,
  ...rest
}: IInputType) => {
  return (
    <InputWrapper
      isError={isError}
      type={type}
      placeholder={placeholder}
      id={valueId}
      value={value}
      onChange={onChange}
      onBlur={(e) =>
        validateCheck && validateCheck({ value: e.target.value, type: valueId })
      } // input 창을 이동할 때 마다 validation check 해주는 함수
      {...rest} // style에 관한 것들 들어감
    />
  );
};

export default Input;
