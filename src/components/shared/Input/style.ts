import styled, { css, DefaultTheme } from "styled-components";

interface INoticeType {
  theme: DefaultTheme;
  isError?: boolean;
}

const InputWrapper = styled.input`
  ${({ theme, isError }: INoticeType) => css`
    height: 100%;
    border: 2px solid
      ${isError ? theme.input.colors.borderError : theme.input.colors.border};
    border-radius: 8px;
    box-sizing: border-box;
    ${theme.typo.body16B}
  `}
`;

export default InputWrapper;
