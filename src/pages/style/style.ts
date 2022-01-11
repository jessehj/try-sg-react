import styled, { css } from "styled-components";

// eslint-disable-next-line import/prefer-default-export
export const LoginWrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    height: 100%;
    margin: 0;

    ${theme.device.tablet} {
      width: 100%;
      display: block;
      background-color: ${theme.common.colors.background};
      margin: auto;
    }
  `}
`;
