import React from "react";
import styled from "styled-components";
import { BLUE01 } from "../../styles/Variables";
import { mediaQueries, MOBILE } from "../../styles/MediaQuery";

const Navbar: React.FC = function () {
  return (
    <Base>
      <LogoWrapper>
        <Logo src="images/SLONCH.svg" />
      </LogoWrapper>
      <MenuContainer>
        <Menu1>홈 피드</Menu1>
        <Menu2>카테고리</Menu2>
        <Menu3>디렉토리</Menu3>
      </MenuContainer>
      <Button>로그인/회원가입</Button>
    </Base>
  );
};

export default Navbar;

const Base = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.06);
  ${mediaQueries(MOBILE)} {
    display: none;
  }
`;

const LogoWrapper = styled.div`
  margin-left: 60px;
`;

const Logo = styled.img``;

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 214px;
  max-width: 214px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  margin-left: 40px;
`;

const Menu1 = styled.a`
  display: block;
`;

const Menu2 = styled.a`
  display: block;
`;

const Menu3 = styled.a`
  display: block;
`;

const Button = styled.button`
  cursor: pointer;
  height: 48px;
  border-radius: 50px;
  border: none;
  background-color: ${BLUE01};
  color: #fff;
  margin-left: auto;
  margin-right: 68px;
  padding-left: 52px;
  padding-right: 20px;
  font-size: 16px;
  line-height: 24px;
  position: relative;
  &:before {
    background: no-repeat center url("icons/login-icon.svg");
    content: "";
    width: 18px;
    height: 18px;
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
  }
`;
