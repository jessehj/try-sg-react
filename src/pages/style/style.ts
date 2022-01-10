import styled, { css } from "styled-components";

// eslint-disable-next-line import/prefer-default-export
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
