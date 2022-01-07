import styled, { css } from "styled-components";

const ButtonWrapper = styled.button`
  ${({ theme, disabled }) => css`
    border: none;
    border-radius: 8px;
    color: ${theme.button.colors.textPrimary};
    background-color: ${disabled
      ? theme.button.colors.bgDisabled
      : theme.button.colors.bgPrimary};
    ${theme.typo.body16B}
  `}
`;

export default ButtonWrapper;
