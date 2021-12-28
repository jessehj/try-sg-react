import React, { useState } from "react";
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
const pwPattern =
  /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
const idPattern = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{6,}$/;
const namePattern = /^[가-힣]{2,}|[a-zA-Z]{2,}$/;
const emailPattern =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
const checkToken = "1234";
const SignUpInput = function () {
  const [isIdType, setIsIdType] = useState<boolean>(true);
  const [isPwType, setIsPwType] = useState<boolean>(true);
  const [isRePwType, setIsRePwType] = useState<boolean>(true);
  const [isNameType, setIsNameType] = useState<boolean>(true);
  const [isTokenType, setIsTokenType] = useState<boolean>(true);
  const [isEmailType, setIsEmailType] = useState<boolean>(true);
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
          {({ handleChange, values }) => (
            <Form>
              <style.IdBox>
                <style.InputId
                  name="userId"
                  type="text"
                  placeholder="아이디"
                  maxLength={15}
                  onChange={handleChange}
                  onBlur={(e) => {
                    if (idPattern.test(e.target.value)) {
                      setIsIdType(true);
                    } else {
                      setIsIdType(false);
                    }
                  }}
                  toggle={isIdType}
                />
                <style.CheckId type="button" onClick={() => {}}>
                  중복확인
                </style.CheckId>
              </style.IdBox>
              {isIdType ? (
                ""
              ) : (
                <style.NoticeText toggle={isIdType}>
                  *한글/영문 2자리 이상
                </style.NoticeText>
              )}
              <style.InputNomal
                name="userPw"
                type="password"
                placeholder="비밀번호"
                maxLength={20}
                onChange={handleChange}
                onBlur={(e) => {
                  if (pwPattern.test(e.target.value)) {
                    setIsPwType(true);
                  } else {
                    setIsPwType(false);
                  }
                }}
                toggle={isPwType}
              />
              <style.NoticeText toggle={isPwType}>
                *영문, 숫자, 특수문자 조합 6자리 이상을 입력해주세요.
              </style.NoticeText>
              <style.InputNomal
                name="userRePw"
                type="password"
                placeholder="비밀번호 재확인"
                maxLength={20}
                onChange={handleChange}
                onBlur={(e) => {
                  if (e.target.value === values.userPw) {
                    setIsRePwType(true);
                  } else {
                    setIsRePwType(false);
                  }
                }}
                toggle={isRePwType}
              />
              {isRePwType ? (
                ""
              ) : (
                <style.NoticeText toggle={isRePwType}>
                  *비밀번호 확인
                </style.NoticeText>
              )}
              <style.InputNomal
                name="userName"
                type="text"
                placeholder="이름"
                maxLength={20}
                onChange={handleChange}
                onBlur={(e) => {
                  if (namePattern.test(e.target.value)) {
                    setIsNameType(true);
                  } else {
                    setIsNameType(false);
                  }
                }}
                toggle={isNameType}
              />
              {isNameType ? (
                ""
              ) : (
                <style.NoticeText toggle={isNameType}>
                  *한글/영문 2자리 이상
                </style.NoticeText>
              )}
              <style.InputNomal
                name="userEmail"
                type="text"
                placeholder="이메일"
                maxLength={30}
                onChange={handleChange}
                onBlur={(e) => {
                  if (emailPattern.test(e.target.value)) {
                    setIsEmailType(true);
                  } else {
                    setIsEmailType(false);
                  }
                }}
                toggle={isEmailType}
              />
              {isEmailType ? (
                ""
              ) : (
                <style.NoticeText toggle={isEmailType}>
                  *이메일 형식 확인
                </style.NoticeText>
              )}
              <style.TokenBox>
                <style.InputPhone
                  name="userPhone"
                  type="text"
                  placeholder="휴대폰 번호 입력"
                  maxLength={13}
                  onChange={(e) => {
                    e.target.value = e.target.value
                      .replace(/[^0-9]/, "")
                      .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
                    handleChange(e);
                  }}
                />
                <style.GetToken type="button">인증번호 받기</style.GetToken>
              </style.TokenBox>
              <style.InputNomal
                name="userToken"
                type="text"
                placeholder="인증번호 입력"
                maxLength={4}
                onChange={handleChange}
                onBlur={(e) => {
                  console.log(values.userPhone);
                  if (checkToken === e.target.value) {
                    setIsTokenType(true);
                  } else {
                    setIsTokenType(false);
                  }
                }}
                toggle={isTokenType}
              />
              {isTokenType ? (
                ""
              ) : (
                <style.NoticeText toggle={isTokenType}>
                  *토큰 확인
                </style.NoticeText>
              )}
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
