import styled, { css, DefaultTheme } from "styled-components";
import Input from "../Input";
import Button from "../Button";

interface IInputType {
  theme: DefaultTheme;
  value?: string;
  error?: boolean;
}

const InputBtn = {
  Wrapper: styled.div`
    display: flex;
    margin-bottom: 10px;

    &:first-of-type {
      margin-top: 12px;
    }

    &:last-of-type {
      margin-bottom: 20px;
    }
  `,
  InputContainer: styled.div`
    ${({ theme }: IInputType) => css`
      flex: 2;
      width: 50%;
      height: ${theme.input.height};
      position: relative;
      margin-right: 8px;
    `}
  `,
  Input: styled(Input)`
    width: 100%;
  `,
  Btn: styled(Button)`
    ${({ theme }) => css`
      flex: 1;
      height: ${theme.input.height};
    `}
  `,
};

export default InputBtn;
