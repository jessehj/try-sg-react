import React from "react";
import styled from "styled-components";

import {
  Base,
  Image,
  ImageWrapper,
  MainContainer,
} from "../../styles/RegisterLayout";

import { GRAY05 } from "../../styles/Variables";
import { CustomButton } from "../../styles/CustomButton";
import { mediaQueries, MOBILE } from "../../styles/MediaQuery";

const WelcomePage = function WelcomePage() {
  return (
    <Base>
      <MobileImageWrapper>
        <Image src="images/Saly-22.svg" />
      </MobileImageWrapper>
      <MainContainer>
        <WelcomeContainer>
          <WelcomeTitle>Welcome to SLONCH!</WelcomeTitle>
          <WelcomeText>슬론치에 오신 것을 환영합니다.</WelcomeText>
          <LoginButton>로그인</LoginButton>
        </WelcomeContainer>
      </MainContainer>
    </Base>
  );
};
export default WelcomePage;

const MobileImageWrapper = styled(ImageWrapper)`
  ${mediaQueries(MOBILE)} {
    display: none;
  }
`;

const WelcomeContainer = styled.div`
  ${mediaQueries(MOBILE)} {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;
const WelcomeTitle = styled.p`
  font-weight: 700;
  font-size: 34px;
  line-height: 54px;
  margin-bottom: 14px;
  ${mediaQueries(MOBILE)} {
    margin-top: 40px;
  }
`;
const WelcomeText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${GRAY05};
  ${mediaQueries(MOBILE)} {
    margin-top: 20px;
  }
`;
const LoginButton = styled(CustomButton)`
  margin-top: 20px;
  width: 319px;
  ${mediaQueries(MOBILE)} {
    position: absolute;
    bottom: 20px;
  }
`;
