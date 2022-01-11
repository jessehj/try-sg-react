import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../components/shared/Button";

const SignUpForm = {
  Wrapper: styled.div`
    ${({ theme }) => css`
      width: 50%;
      height: calc(100vh - 80px);
      display: flex;
      justify-content: center;

      ${theme.device.tablet} {
        width: 100%;
        height: 769px;
      }
    `}
  `,
  Form: styled.form`
    width: 316px;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;

    &::before,
    &::after {
      content: "";
      margin: auto;
    }
  `,
  Title: styled.h2`
    ${({ theme }) => css`
      width: 100%;
      ${theme.typo.head24}
    `}
  `,
  SignUpBtn: styled(Button)`
    ${({ theme }) => css`
      display: inline-block;
      width: 100%;
      min-height: ${theme.button.heights.extraLarge};
      margin-bottom: 12px;
    `}
  `,
  ToLogin: styled.div`
    ${({ theme }) => css`
      margin-top: 24px;
      color: ${theme.common.colors.gray2};
      text-align: center;
      ${theme.typo.body14B};
    `}
  `,
  ToLoginLink: styled(Link)`
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

export default SignUpForm;
