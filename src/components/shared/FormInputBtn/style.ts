import styled, { css, DefaultTheme } from "styled-components";

interface IInputType {
  theme: DefaultTheme;
  value?: string;
  error?: boolean;
}

export const InputBtnWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;

  &:first-of-type {
    margin-top: 12px;
  }

  &:last-of-type {
    margin-bottom: 20px;
  }
`;

export const InputImgWrapper = styled.div`
  ${({ theme, value, error }: IInputType) => css`
    flex: 2;
    width: 50%;
    height: ${theme.input.height};
    position: relative;
    margin-right: 8px;

    & > input:focus ~ img {
      filter: invert(40%) sepia(69%) saturate(793%) hue-rotate(183deg)
        brightness(103%) contrast(97%);
    }

    img {
      position: absolute;
      right: 24px;
      top: 50%;
      transform: translateY(-50%);

      filter: ${value
        ? "invert(40%) sepia(69%) saturate(793%) hue-rotate(183deg) brightness(103%) contrast(97%)"
        : error &&
          "invert(75%) sepia(82%) saturate(4967%) hue-rotate(323deg) brightness(103%) contrast(119%)"};
    }
  `}
`;

export const InputStyle = styled.input`
  ${({ theme, error }: IInputType) => css`
    width: 100%;
    height: ${theme.input.height};
    padding: ${theme.input.padding};
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

    ${theme.typo.body16B}
  `}
`;

export const BtnStyle = styled.button`
  ${({ theme }) => css`
    flex: 1;
    height: ${theme.input.height};
    border: none;
    border-radius: 8px;
    color: ${theme.button.colors.textPrimary};
    background-color: ${theme.button.colors.bgPrimary};

    ${theme.typo.button16B}
  `}
`;

export const InputNotice = styled.div`
  ${({ theme, error }: IInputType) => css`
    color: ${!error ? theme.common.colors.primary : theme.common.colors.error};
    margin: 8px 10px 12px;
    ${theme.typo.body12R}
  `}
`;
