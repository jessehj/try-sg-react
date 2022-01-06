import styled, { css, DefaultTheme } from "styled-components";
import LoginLogo from "../../../assets/svgs/login-logo.svg";

interface ILoginLogoType {
  theme: DefaultTheme;
  type: "signUp" | "login" | "welcome";
}

const LoginLogoWrap = styled.div`
  ${({ theme, type }: ILoginLogoType) => css`
    width: 50%;
    height: calc(100vh - 80px);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.common.colors.background};
    background-image: url(${LoginLogo});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50%;

    ${theme.device.tablet} {
      display: ${(type === "signUp" || type === "welcome") && "none"};
      ${
        type === "login" && {
          width: "100%",
          backgroundSize: "164px",
          height: "292px",
        }
      }
  `}
`;

export default LoginLogoWrap;
