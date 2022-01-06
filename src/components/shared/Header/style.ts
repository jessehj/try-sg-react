import styled, { css, DefaultTheme } from "styled-components";
import { Link } from "react-router-dom";

export const HeaderList = styled.div`
  ${({ theme }) => css`
    ${theme.header}
    padding: 0 60px;
    background-color: ${theme.header.colors.background};

    .header__menus {
      margin-left: 24px;
      color: ${theme.header.colors.unSelect};
      border: none;
      background: none;
      ${theme.typo.body16M};

      &:hover {
        color: ${theme.header.colors.select};
      }

      & > div:first-child {
        border: 1px solid black;
      }
    }
  }
  `};
`;

interface ITypeLogin {
  theme: DefaultTheme;
  login: boolean;
}

export const HeaderLoginBtn = styled(Link)`
  ${({ theme, login }: ITypeLogin) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 20px;
    margin-left: auto;
    border: none;
    border-radius: 50px;
    background: ${!login && theme.button.colors.bgPrimary};
    color: ${theme.button.colors.textPrimary};
    height: ${login && "48px"};
    width: ${login && "48px"};
    text-decoration: none;
    box-sizing: border-box;

    img {
      height: ${login && "48px"};
      width: ${login && "48px"};
    }

    .header__login--btn {
      margin-right: 10px;
    }

    span {
      display: inline-block;
    }

    ${theme.typo.body16M}
  `}
`;
