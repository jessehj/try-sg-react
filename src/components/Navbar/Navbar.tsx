import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";

import { BLUE01, BLUE02, GRAY06 } from "../../styles/Variables";
import { mediaQueries, MOBILE } from "../../styles/MediaQuery";

const Navbar: React.FC = function () {
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);

  const navigate = useNavigate();
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
      <Button onClick={() => navigate("/login")}>로그인/회원가입</Button>
      {!isDropDownOpen ? (
        <MobileButton onClick={() => setIsDropDownOpen(true)}>
          <img src="icons/mobile-menu.svg" alt="menu" />
        </MobileButton>
      ) : (
        <>
          <MobileButton onClick={() => setIsDropDownOpen(false)}>
            <img src="icons/x-icon.svg" alt="menu" />
          </MobileButton>
          <MobileDropDown>
            <DropDownProfileContainer>
              <ProfileImg src="images/profile-img.svg" />
              <ProfileName>이나</ProfileName>
              <ProfileButton>글쓰기</ProfileButton>
            </DropDownProfileContainer>
            <DropDownMenuContainer>
              <HomePeed>홈피드</HomePeed>
              <Category>카테고리</Category>
              <Directory>디렉토리</Directory>
              <ProfileInfo>내 정보</ProfileInfo>
            </DropDownMenuContainer>
            <DropDownLogoutWrapper>
              <LogoutButton>로그아웃</LogoutButton>
            </DropDownLogoutWrapper>
          </MobileDropDown>
        </>
      )}
    </Base>
  );
};

export default Navbar;

const Base = styled.div`
  position: fixed;
  height: 80px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  display: flex;
  align-items: center;
  box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.06);
  background-color: #fff;
  z-index: 9999;
  ${mediaQueries(MOBILE)} {
    justify-content: space-between;
    height: 60px;
    background-color: #fff;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
  }
`;

const LogoWrapper = styled.div`
  margin-left: 60px;
  ${mediaQueries(MOBILE)} {
    margin-left: 16px;
    width: 81px;
    height: 15px;
  }
`;

const Logo = styled.img`
  ${mediaQueries(MOBILE)} {
    width: 100%;
    height: 100%;
  }
`;

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
  ${mediaQueries(MOBILE)} {
    display: none;
  }
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
  z-index: 9;
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
  ${mediaQueries(MOBILE)} {
    display: none;
  }
`;

const MobileButton = styled.div`
  display: none;
  margin-right: 16px;
  ${mediaQueries(MOBILE)} {
    display: block;
  }
`;

const DropdownAnimation = keyframes`
    0% {
        transform: translateX(-50%) rotateX(-90deg)
}
    80% {
        transform: translateX(-50%) rotateX(20deg)
}
    100% {
        transform: translateX(-50%) rotateX(0deg)
    }
`;

const MobileDropDown = styled.div`
  position: fixed;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  background-color: #fff;
  z-index: 9990;
  box-shadow: 0px 20px 16px rgba(0, 0, 0, 0.06);
  animation: ${DropdownAnimation} 400ms ease-in-out forwards;
  transform-origin: top center;
`;

const DropDownProfileContainer = styled.div`
  height: 180px;
  border-bottom: 1px solid rgba(235, 236, 243, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProfileImg = styled.img`
  margin-bottom: 8px;
`;

const ProfileName = styled.div`
  color: ${GRAY06};
  font-size: 18px;
  line-height: 27px;
  font-weight: 700;
  margin-bottom: 8px;
`;

const ProfileButton = styled.button`
  width: 80px;
  height: 30px;
  border-radius: 50px;
  border: 1px solid rgba(57, 126, 246, 1);
  background-color: #fff;
  color: rgba(57, 126, 246, 1);
  padding: 6px 12px 6px 30px;
  position: relative;
  &:after {
    content: url("icons/edit-blue-icon.svg");
    position: absolute;
    left: 12px;
    top: 55%;
    transform: translateY(-50%);
  }
`;

const DropDownMenuContainer = styled.div`
  height: 250px;
  border-bottom: 1px solid rgba(235, 236, 243, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Menu = styled.div`
  font-size: 22px;
  line-height: 33px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const HomePeed = styled(Menu)`
  color: ${BLUE02};
`;

const Category = styled(Menu)``;

const Directory = styled(Menu)``;

const ProfileInfo = styled(Menu)``;

const DropDownLogoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoutButton = styled.button`
  margin: 16px auto;
  width: 70px;
  height: 30px;
  border-radius: 100px;
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  background-color: #fff;
  border: 1px solid rgba(136, 136, 136, 1);
  color: rgba(136, 136, 136, 1);
`;
