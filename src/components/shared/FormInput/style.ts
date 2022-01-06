import styled, { css, DefaultTheme } from "styled-components";

interface ILoginType {
  theme: DefaultTheme;
  value?: string;
  error?: boolean;
}

export const InputInnerWrapper = styled.input`
  ${({ theme, error }: ILoginType) => css`
    width: 100%;
    height: 100%;
    padding: ${theme.input.padding};
    padding-right: 50px !important;
    border: 2px solid
      ${error ? theme.input.colors.borderError : theme.input.colors.border};
    border-radius: 8px;
    box-sizing: border-box;

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
