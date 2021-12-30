import React from "react";
import styled from "styled-components";
import LoginIcon from "../../assets/icon/Create.svg";
import Button from "../Button";
import CircleImage from "../CircleImage";
import exampleImage from "../../assets/image/exampleUser.svg";

interface LoginProps {
  isLogin: boolean;
}

const LoginInfo: React.FC<LoginProps> = function LoginInfo({ isLogin }) {
  return isLogin === true ? (
    <CircleImage src={exampleImage} width="48px" height="48px" />
  ) : (
    <Button btnType="icon">
      <StyledIcon />
      로그인/회원가입
    </Button>
  );
};
export default LoginInfo;

const StyledIcon = styled.div`
  position: static;
  width: 24px;
  height: 24px;
  left: 0%;

  top: 11.78%;
  bottom: 11.78%;
  background-image: url(${LoginIcon});
  /* Inside Auto Layout */
  background-repeat: no-repeat;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-right: 10.86px;
`;
