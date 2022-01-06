import React from "react";
import { InputInnerWrapper, InputWrapper } from "./style";
import { InputNotice } from "../FormInputBtn/style";
import { IIdType, IValidateType } from "../../utils";

interface IInputType {
  type: string;
  valueId: IIdType;
  placeholder: string;
  value?: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  children?: any;
  style?: any;
  message?: string;
  error?: boolean;
  validateCheck?: ({ value, type }: IValidateType) => void;
}

const FormInput = ({
  type,
  valueId,
  placeholder,
  value,
  onChange,
  children,
  message,
  error,
  validateCheck,
  ...rest
}: IInputType) => {
  return (
    <>
      <InputWrapper {...rest} value={value}>
        <InputInnerWrapper
          error={error}
          type={type}
          placeholder={placeholder}
          id={valueId}
          value={value}
          onChange={onChange}
          onBlur={(e) =>
            validateCheck &&
            validateCheck({ value: e.target.value, type: valueId })
          } // input창을 이동할 때 마다 validation check 해주는 함수
        />
        {children}
      </InputWrapper>
      {message && <InputNotice error>{message}</InputNotice>}
    </>
  );
};

export default FormInput;
