import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

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

const SignupPage = function SignUpPage() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      accountId: "",
      password: "",
      confirmPwd: "",
      name: "",
      email: "",
      phone: "",
      cert: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  return (
    <Base>
      <MobileImageWrapper>
        <Image src="images/Saly-22.svg" />
      </MobileImageWrapper>
      <MainContainer direction={false}>
        <RegisterText>Sign Up</RegisterText>
        <RegisterContainer onSubmit={formik.handleSubmit}>
          <IdContainer>
            <IdInputContainer>
              <IdInput
                type="text"
                id="accountId"
                name="accountId"
                placeholder="아이디"
                onChange={formik.handleChange}
                value={formik.values.accountId}
              />
              <IdInputICon src="icons/user-icon.svg" />
            </IdInputContainer>
            <IdButton>중복확인</IdButton>
          </IdContainer>
          <PwdContainer>
            <PwdInputContainer>
              <PwdInput
                type="password"
                id="password"
                name="password"
                placeholder="비밀번호"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <PwdInputICon src="icons/pwd-icon.svg" />
            </PwdInputContainer>
            <PwdText>
              *영문, 숫자, 특수문자 조합 6자리 이상을 입력해주세요.
            </PwdText>
          </PwdContainer>
          <ConfirmPwdInputContainer>
            <ConfirmPwdInput
              type="password"
              id="confirmPwd"
              name="confirmPwd"
              placeholder="비밀번호 재확인"
              onChange={formik.handleChange}
              value={formik.values.confirmPwd}
            />
            <ConfirmPwdInputICon src="icons/pwd-icon.svg" />
          </ConfirmPwdInputContainer>
          <NameInput
            type="text"
            id="name"
            name="name"
            placeholder="이름"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <EmailInput
            type="email"
            id="email"
            name="email"
            placeholder="이메일"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <PhoneNumberContainer>
            <PhoneNumberInput
              id="phone"
              name="phone"
              placeholder="휴대폰 번호 입력"
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
            <PhoneNumberButton>인증번호 받기</PhoneNumberButton>
          </PhoneNumberContainer>
          <CertificationInput
            type="text"
            id="cert"
            name="cert"
            placeholder="인증번호 입력"
            onChange={formik.handleChange}
            value={formik.values.cert}
          />
          <RegisterButton>가입하기</RegisterButton>
        </RegisterContainer>
        <RegisterInfoContainer>
          <RegisterInfoText>이미 계정이 있으신가요?</RegisterInfoText>
          <Login onClick={() => navigate("/login")}>Log In</Login>
        </RegisterInfoContainer>
      </MainContainer>
    </Base>
  );
};
export default SignupPage;

const MobileImageWrapper = styled(ImageWrapper)`
  ${mediaQueries(MOBILE)} {
    display: none;
  }
`;

const RegisterContainer = styled.form`
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
`;

const RegisterText = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  margin-top: 15px;
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
  margin-bottom: 15px;
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
  margin-bottom: 24px;
`;

const RegisterInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 40px;
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
