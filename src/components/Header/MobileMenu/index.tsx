import React from "react";
import styled from "styled-components";
import CircleImage from "../../CircleImage";
import Span from "../../Span";
import Button from "../../Button";
import MenuLink from "../../Menu/MenuLinks/style";
import StyledMobileMenu from "./style";
import { MobileMenuLayout } from "../../Menu/style";
import FlexContainer from "../../../style/FlexContainer";

import LoginIcon from "../../../assets/icon/CreateBlue.svg";

const MobileMenu: React.FC<{
  isOpen: boolean;
  profileImage: string;
  userName: string;
}> = function MobileMenu({ isOpen, profileImage, userName }) {
  return (
    <StyledMobileMenu isOpen={isOpen}>
      <StyledContainer>
        <CircleImage
          src={profileImage}
          width="80px"
          height="80px"
          margin="12px 0 0px 0px"
        />
        <Button btnType="basic_icon" margin="0 0 24px 0">
          <StyledIcon />
          글쓰기
        </Button>
        <Span
          fontStyle="normal"
          fontSize="18px"
          fontWeight="700"
          lineHeight="27px"
          textAlign="center"
          margin="8px 0 8px 0"
        >
          {userName}
        </Span>
      </StyledContainer>
      <MobileMenuLayout>
        <MenuLink>홈 피드</MenuLink>
        <MenuLink>카테고리</MenuLink>
        <MenuLink>디렉토리</MenuLink>
        <MenuLink>내 정보</MenuLink>
      </MobileMenuLayout>
      <StyledFooter>
        <Button btnType="basic_icon" margin="16px 0">
          로그아웃
        </Button>
      </StyledFooter>
    </StyledMobileMenu>
  );
};
export default MobileMenu;
const StyledIcon = styled.div`
  position: static;
  width: 13.5px;
  height: 13.5px;
  left: 0%;

  top: 11.78%;
  bottom: 11.78%;
  background-image: url(${LoginIcon});
  /* Inside Auto Layout */
  background-repeat: no-repeat;
  background-size: contain;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-right: 10.86px;
`;
const StyledContainer = styled(FlexContainer)`
  background-color: #ffffff;
`;
const StyledFooter = styled(StyledContainer)`
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.06);
`;
