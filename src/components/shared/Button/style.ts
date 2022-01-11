import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const ButtonWrapper = {
  Link: styled(Link)`
    ${({ theme }) => css`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      border-radius: 8px;
      color: ${theme.button.colors.textPrimary};
      background-color: ${theme.button.colors.bgPrimary};
      text-decoration: none;
      cursor: pointer;

      ${theme.typo.body16B}
    `}
  `,
  Button: styled.button`
    ${({ theme, disabled }) => css`
      border: none;
      border-radius: 8px;
      color: ${theme.button.colors.textPrimary};
      background-color: ${disabled
        ? theme.button.colors.bgDisabled
        : theme.button.colors.bgPrimary};
      cursor: pointer;
      ${theme.typo.body16B}
    `}
  `,
};

export default ButtonWrapper;
