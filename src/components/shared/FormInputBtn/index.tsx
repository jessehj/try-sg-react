import React from "react";
import {
  BtnStyle,
  InputBtnWrapper,
  InputStyle,
  InputImgWrapper,
  InputNotice,
} from "./style";

interface IInputType {
  type: string;
  valueId: string;
  placeholder: string;
  value?: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  onClick: (value?: string) => void;
  children?: any;
  style?: any;
  btnValue: string;
  message?: string;
  error?: boolean;
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
  error,
  isDisabled,
  ...rest
}: IInputType) => {
  return (
    <>
      <InputBtnWrapper>
        <InputImgWrapper {...rest} value={value}>
          <InputStyle
            error={error}
            type={type}
            placeholder={placeholder}
            id={valueId}
            value={value}
            onChange={onChange}
          />
          {children}
        </InputImgWrapper>
        <BtnStyle
          type="button"
          disabled={isDisabled}
          onClick={() => onClick(value)}
        >
          {btnValue}
        </BtnStyle>
      </InputBtnWrapper>
      {message && <InputNotice error={error}>{message}</InputNotice>}
    </>
  );
};

export default FormInputBtn;
