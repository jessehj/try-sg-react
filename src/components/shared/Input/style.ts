import styled, { css, DefaultTheme } from "styled-components";

interface INoticeType {
  theme: DefaultTheme;
  isError?: boolean;
}

const InputWrapper = styled.input`
  ${({ theme, isError }: INoticeType) => css`
    height: 100%;
    padding: ${theme.input.padding};
    border: 2px solid
      ${isError ? theme.input.colors.borderError : theme.input.colors.border};
    border-radius: 8px;
    box-sizing: border-box;
    background-color: #fff !important;

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

    ${theme.typo.body16B}
  `}
`;

export default InputWrapper;
