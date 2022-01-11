import React from "react";
import InputBtn from "./style";
import Notice from "../Notice";
import { IIdType } from "../../utils";

interface IInputType {
  type: string;
  valueId: IIdType;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (value?: string) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  btnValue: string;
  message?: string;
  isError?: boolean;
  isDisabled?: boolean;
  disabled?: boolean;
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
  disabled,
  ...rest
}: IInputType) => {
  const testprops = {
    isError,
    type,
    placeholder,
    valueId,
    value,
    onChange,
    disabled,
  };
  return (
    <>
      <InputBtn.Wrapper>
        <InputBtn.InputContainer {...rest} value={value}>
          <InputBtn.Input {...testprops} />
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
