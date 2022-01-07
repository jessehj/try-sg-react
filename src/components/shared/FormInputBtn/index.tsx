import React from "react";
import InputBtn from "./style";
import Notice from "../Notice";
import { IIdType } from "../../utils";

interface IInputType {
  type: string;
  valueId: IIdType;
  placeholder: string;
  value?: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  onClick: (value?: string) => void;
  children?: any;
  style?: any;
  btnValue: string;
  message?: string;
  isError?: boolean;
  isDisabled?: boolean;
}

const FormInputBtn = ({
  type,
  valueId,
  placeholder,
  value,
  onChange,
  children,
  btnValue,
  message,
  onClick,
  isError,
  isDisabled,
  ...rest
}: IInputType) => {
  return (
    <>
      <InputBtn.Wrapper>
        <InputBtn.InputContainer {...rest} value={value}>
          <InputBtn.Input
            isError={isError}
            type={type}
            placeholder={placeholder}
            valueId={valueId}
            value={value}
            onChange={onChange}
          />
          {children}
        </InputBtn.InputContainer>
        <InputBtn.Btn disabled={isDisabled} onClick={() => onClick(value)}>
          {btnValue}
        </InputBtn.Btn>
      </InputBtn.Wrapper>
      {message && <Notice isError={isError} message={message} />}
    </>
  );
};

export default FormInputBtn;
