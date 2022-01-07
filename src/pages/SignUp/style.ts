import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const SignUpWrapper = styled.main`
  ${({ theme }) => css`
    display: flex;

    ${theme.device.tablet} {
      display: block;
      width: 100%;
      height: 100vh;
      background-color: ${theme.common.colors.background};
      margin: auto;
    }
  `}
`;

export const SignUpForm = {
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
        height: 769px;
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
      margin-left: 10px !important;

      &:first-of-type,
      &:nth-of-type(2) {
        &::after {
          content: "";
          margin-left: 10px;
          border: 1px solid;
        }
      }

      &:hover {
        color: ${theme.common.colors.primary};
      }

      ${theme.typo.body14B}
    `}
  `,
  BackToLogin: styled.div`
    ${({ theme }) => css`
      margin-top: 24px;
      color: ${theme.common.colors.gray2};
      ${theme.typo.body14B};
    `}
  `,
  BackToLoginLink: styled(Link)`
    ${({ theme }) => css`
      margin-left: 5px;
      color: ${theme.common.colors.primary};
      text-decoration: none;
    `}
  `,
  Timer: styled.div`
    ${({ theme }) => css`
      position: absolute;
      right: 24px;
      top: 50%;
      transform: translateY(-50%);
      color: ${theme.common.colors.error};
      box-sizing: border-box;

      ${theme.typo.body16B}
    `}
  `,
};
