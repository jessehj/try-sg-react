import React from "react";
import styled from "styled-components";

import {
  Base,
  Image,
  ImageWrapper,
  MainContainer,
} from "../../styles/RegisterLayout";

import { GRAY03, BLUE01 } from "../../styles/Variables";
import { CustomInput } from "../../styles/CustomInput";
import { CustomButton } from "../../styles/CustomButton";

const LoginPage = function LoginPage() {
  return (
    <Base>
      <ImageWrapper>
        <Image src="images/Saly-22.svg" />
      </ImageWrapper>
      <MainContainer>
        <LoginContainer>
          <LoginText>Log In</LoginText>
          <LoginInputContainer>
            <IdInputContainer>
              <IdInput placeholder="아이디" />
              <IdInputICon src="icons/user-icon.svg" />
            </IdInputContainer>
            <PwdInputContainer>
              <PwdInput placeholder="비밀번호" />
              <PwdInputICon src="icons/pwd-icon.svg" />
            </PwdInputContainer>
          </LoginInputContainer>
          <LoginButton>로그인</LoginButton>
          <LoginInfoContainer>
            <SearchId>아이디 찾기</SearchId>
            <SearchPwd>비밀번호 찾기</SearchPwd>
            <Register>회원가입</Register>
          </LoginInfoContainer>
        </LoginContainer>
      </MainContainer>
    </Base>
  );
};
export default LoginPage;

const LoginContainer = styled.div``;

const LoginText = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 20px;
`;

const LoginInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IdInputContainer = styled.div`
  position: relative;
  height: 56px;
  margin-bottom: 15px;
`;

const IdInput = styled(CustomInput)`
  width: 320px;
  margin-bottom: 10px;
`;

const IdInputICon = styled.img`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
`;

const PwdInputContainer = styled.div`
  position: relative;
  height: 56px;
  margin-bottom: 15px;
`;

const PwdInput = styled(CustomInput)`
  width: 320px;
`;

const PwdInputICon = styled.img`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
`;

const LoginButton = styled(CustomButton)`
  margin-top: 20px;
  width: 319px;
`;

const LoginInfoContainer = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  color: ${GRAY03};
`;

const Search = styled.p`
  cursor: pointer;
  position: relative;
  margin: 0 5px;
  &:before {
    position: absolute;
    top: 50%;
    right: -6px;
    transform: translateY(-50%);
    content: "";
    width: 2px;
    height: 14px;
    background-color: ${GRAY03};
  }
`;

const SearchId = styled(Search)``;
const SearchPwd = styled(Search)``;
const Register = styled.a`
  cursor: pointer;
  color: ${BLUE01};
  margin: 0 5px;
`;
