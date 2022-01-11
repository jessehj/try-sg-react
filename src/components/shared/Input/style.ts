import styled, { css, DefaultTheme } from "styled-components";

interface INoticeType {
  theme: DefaultTheme;
  isError?: boolean;
  disabled?: boolean;
}

const InputWrapper = styled.input`
  ${({ theme, isError, disabled }: INoticeType) => css`
    height: ${theme.input.height};
    padding: ${theme.input.padding};
    border: 2px solid
      ${isError ? theme.input.colors.borderError : theme.input.colors.border};
    border-radius: 8px;
    box-sizing: border-box;
    background-color: ${disabled
      ? theme.common.colors.background
      : theme.common.colors.white};

    &::placeholder {
      color: ${theme.common.colors.gray2};
    }

    &:focus {
      border: 2px solid ${theme.input.colors.borderActive};
    }

    &[type="number"]::-webkit-outer-spin-button,
    &[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      transition: background-color 5000s !important;
    }

    ${theme.typo.body16B}
  `}
`;

export default InputWrapper;
