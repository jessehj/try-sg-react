import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Formik, Form } from "formik";
import { Theme } from "../../constants/theme";
import style from "./style";

const AlreadyLink = styled(Link)`
  text-decoration: none;
  color: ${Theme.Colors.PRIMARY_COLOR};
`;
interface UserInfoType {
  userId: string;
  userPw: string;
  userRePw: string;
  userName: string;
  userEmail: string;
  userPhone: string;
  userToken: string;
}
const initialValues: UserInfoType = {
  userId: "",
  userPw: "",
  userRePw: "",
  userName: "",
  userEmail: "",
  userPhone: "",
  userToken: "",
};
const SignUpInput = function () {
  return (
    <style.SignInWrap>
      <style.SignInContainer>
        <h3>Sign Up</h3>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {() => (
            <Form>
              <style.IdBox>
                <style.InputId name="userId" type="text" placeholder="아이디" />
                <style.CheckId type="button" onClick={() => {}}>
                  중복확인
                </style.CheckId>
              </style.IdBox>
              <style.InputNomal
                name="userPw"
                type="password"
                placeholder="비밀번호"
              />
              <style.NoticeText>
                *영문, 숫자, 특수문자 조합 6자리 이상을 입력해주세요.
              </style.NoticeText>
              <style.InputNomal
                name="userRePw"
                type="password"
                placeholder="비밀번호 재확인"
              />
              <style.InputNomal
                name="userName"
                type="text"
                placeholder="이름"
              />
              <style.InputNomal
                name="userEmail"
                type="text"
                placeholder="이메일"
              />
              <style.TokenBox>
                <style.InputPhone
                  name="userPhone"
                  type="text"
                  placeholder="휴대폰 번호 입력"
                />
                <style.GetToken>인증번호 받기</style.GetToken>
              </style.TokenBox>
              <style.InputNomal
                name="userToken"
                type="text"
                placeholder="인증번호 입력"
              />
              <style.JoinButton type="submit">가입하기</style.JoinButton>
            </Form>
          )}
        </Formik>
        <style.AlreadyWrap>
          이미 계정이 있으신가요?&nbsp;<AlreadyLink to="/">Log In</AlreadyLink>
        </style.AlreadyWrap>
      </style.SignInContainer>
    </style.SignInWrap>
  );
};

export default SignUpInput;
