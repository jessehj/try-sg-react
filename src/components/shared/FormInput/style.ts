import styled, { css, DefaultTheme } from "styled-components";
import Input from "../Input";

interface ILoginType {
  theme: DefaultTheme;
  value?: string;
  error?: boolean;
}

export const InputInnerWrapper = styled(Input)`
  width: 100%;
  padding-right: 50px !important;
`;

export const InputWrapper = styled.div`
  ${({ theme }: ILoginType) => css`
    width: 100%;
    height: ${theme.input.height};
    margin-bottom: 10px;
    position: relative;

    & > input:focus ~ img {
      filter: invert(40%) sepia(69%) saturate(793%) hue-rotate(183deg)
        brightness(103%) contrast(97%);
    }

    img {
      position: absolute;
      right: 24px;
      top: 50%;
      transform: translateY(-50%);

      //filter: invert(75%) sepia(82%) saturate(4967%) hue-rotate(323deg) brightness(103%) contrast(119%);
    }

    &:first-of-type {
      margin-top: 12px;
    }

    &:last-of-type {
      margin-bottom: 20px;
    }
  `}
`;
