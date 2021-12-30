import React from "react";
import styled from "styled-components";

import { CustomInput } from "../../styles/CustomInput";
import { CustomButton } from "../../styles/CustomButton";

import {
  Base,
  Image,
  ImageWrapper,
  MainContainer,
} from "../../styles/RegisterLayout";
import { BLUE02, GRAY03, GRAY04 } from "../../styles/Variables";
import { mediaQueries, MOBILE } from "../../styles/MediaQuery";

const SignUpPage = function SignUpPage() {
  return (
    <Base>
      <MobileImageWrapper>
        <Image src="images/Saly-22.svg" />
      </MobileImageWrapper>
      <MainContainer>
        <RegisterContainer>
          <RegisterText>Sign Up</RegisterText>
          <IdContainer>
            <IdInputContainer>
              <IdInput placeholder="아이디" />
              <IdInputICon src="icons/user-icon.svg" />
            </IdInputContainer>
            <IdButton>중복확인</IdButton>
          </IdContainer>
          <PwdContainer>
            <PwdInputContainer>
              <PwdInput placeholder="비밀번호" />
              <PwdInputICon src="icons/pwd-icon.svg" />
            </PwdInputContainer>
            <PwdText>
              *영문, 숫자, 특수문자 조합 6자리 이상을 입력해주세요.
            </PwdText>
          </PwdContainer>
          <ConfirmPwdInputContainer>
            <ConfirmPwdInput placeholder="비밀번호 재확인" />
            <ConfirmPwdInputICon src="icons/pwd-icon.svg" />
          </ConfirmPwdInputContainer>
          <NameInput placeholder="이름" />
          <EmailInput placeholder="이메일" />
          <PhoneNumberContainer>
            <PhoneNumberInput placeholder="휴대폰 번호 입력" />
            <PhoneNumberButton>인증번호 받기</PhoneNumberButton>
          </PhoneNumberContainer>
          <CertificationInput placeholder="인증번호 입력" />
          <RegisterButton>가입하기</RegisterButton>
          <RegisterInfoContainer>
            <RegisterInfoText>이미 계정이 있으신가요? </RegisterInfoText>
            <Login>Log In</Login>
          </RegisterInfoContainer>
        </RegisterContainer>
      </MainContainer>
    </Base>
  );
};
export default SignUpPage;

const MobileImageWrapper = styled(ImageWrapper)`
  ${mediaQueries(MOBILE)} {
    display: none;
  }
`;

const RegisterContainer = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RegisterText = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 24px;
`;

const IdContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
  margin-bottom: 15px;
`;

const IdInputContainer = styled.div`
  position: relative;
  height: 56px;
  margin-bottom: 15px;
`;

const IdInput = styled(CustomInput)`
  width: 213px;
`;

const IdInputICon = styled.img`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
`;

const IdButton = styled(CustomButton)`
  flex: 0.95;
  height: 100%;
`;

const PwdContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 15px;
`;

const PwdInputContainer = styled.div`
  position: relative;
  height: 56px;
  margin-bottom: 15px;
`;

const PwdInput = styled(CustomInput)`
  width: 100%;
  margin-bottom: 8px;
`;

const PwdInputICon = styled.img`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
`;

const PwdText = styled.p`
  color: ${GRAY04};
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  margin-left: 10px;
`;

const ConfirmPwdInputContainer = styled.div`
  position: relative;
  height: 56px;
  margin-bottom: 15px;
`;

const ConfirmPwdInput = styled(CustomInput)`
  width: 100%;
  margin-bottom: 15px;
`;

const ConfirmPwdInputICon = styled.img`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
`;

const NameInput = styled(CustomInput)`
  width: 100%;
  margin-bottom: 15px;s
`;

const EmailInput = styled(CustomInput)`
  width: 100%;
  margin-bottom: 15px;
`;

const PhoneNumberContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
  margin-bottom: 15px;
`;

const PhoneNumberInput = styled(CustomInput)`
  width: 180px;
`;

const PhoneNumberButton = styled(CustomButton)`
  flex: 0.95;
  height: 100%;
`;

const CertificationInput = styled(CustomInput)`
  width: 100%;
  margin-bottom: 15px;
`;

const RegisterButton = styled(CustomButton)`
  width: 100%;
`;

const RegisterInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  ${mediaQueries(MOBILE)} {
    margin-top: 24px;
  }
`;

const RegisterInfoText = styled.p`
  color: ${GRAY03};
  margin-right: 5px;
`;

const Login = styled.p`
  cursor: pointer;
  display: block;
  color: ${BLUE02};
`;
