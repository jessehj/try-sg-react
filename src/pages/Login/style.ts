import styled, { css, DefaultTheme } from "styled-components";
import Button from "../../components/shared/Button";

interface IInputType {
  theme: DefaultTheme;
  value?: string;
  error?: boolean;
}

const LoginForm = {
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
  LoginBtn: styled(Button)`
    ${({ theme }) => css`
      width: 100%;
      height: ${theme.button.heights.extraLarge};
      margin-bottom: 12px;
    `}
  `,
  FindBtn: styled(Button)`
    ${({ theme }) => css`
      display: inline;
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
  ImageContainer: styled.img`
    ${({ value, error }: IInputType) => css`
      position: absolute;
      right: 24px;
      top: 50%;
      transform: translateY(-50%);

      filter: ${value
        ? "invert(40%) sepia(69%) saturate(793%) hue-rotate(183deg) brightness(103%) contrast(97%)"
        : error &&
          "invert(75%) sepia(82%) saturate(4967%) hue-rotate(323deg) brightness(103%) contrast(119%)"};

      & > input:focus ~ img {
        filter: invert(40%) sepia(69%) saturate(793%) hue-rotate(183deg)
          brightness(103%) contrast(97%);
      }
    `}
  `,
};
export default LoginForm;
