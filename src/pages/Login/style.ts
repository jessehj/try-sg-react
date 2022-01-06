import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const LoginWrapper = styled.main`
  ${({ theme }) => css`
    display: flex;

    ${theme.device.tablet} {
      width: 100%;
      display: block;
      background-color: ${theme.common.colors.background};
      height: 100vh;
      margin: auto;
    }
  `}
`;

export const LoginForm = {
  Wrapper: styled.div`
    ${({ theme }) => css`
      width: 50%;
      height: calc(100vh - 80px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      ${theme.device.tablet} {
        width: 100%;
        height: 268px;
      }
    `}
  `,
  Form: styled.form`
    width: 316px;
  `,
  Title: styled.h2`
    ${({ theme }) => css`
      width: 100%;
      ${theme.typo.head24}
    `}
  `,
  LoginBtn: styled.button`
    ${({ theme, disabled }) => css`
      width: 100%;
      height: ${theme.button.heights.extraLarge};
      border: none;
      border-radius: 8px;
      color: ${theme.button.colors.textPrimary};
      background-color: ${disabled
        ? theme.button.colors.bgDisabled
        : theme.button.colors.bgPrimary};
      margin-bottom: 12px;

      ${theme.typo.body16B}
    `}
  `,
  FindBtn: styled(Link)`
    ${({ theme }) => css`
      color: ${theme.common.colors.gray2};
      border: none;
      background-color: #fff;
      text-decoration: none;

      &:first-of-type,
      &:nth-of-type(2) {
        &::after {
          content: "";
          margin: 0 10px;
          border: 1px solid;
        }
      }

      &:hover {
        color: ${theme.common.colors.primary};
      }

      ${theme.typo.body14B}
    `}
  `,
};
