import React from "react";
import style from "./style";

const Index = function () {
  return (
    <style.SignInWrap>
      <style.SignInContainer>
        <h3>Sign Up</h3>
        <style.IdBox>
          <style.InputId type="text" placeholder="아이디" />
          <style.CheckId>중복확인</style.CheckId>
        </style.IdBox>
        <style.InputNomal type="password" placeholder="비밀번호" />
        <style.NoticeText>
          *영문, 숫자, 특수문자 조합 6자리 이상을 입력해주세요.
        </style.NoticeText>
        <style.InputNomal type="password" placeholder="비밀번호 재확인" />
        <style.InputNomal type="text" placeholder="이름" />
        <style.InputNomal type="text" placeholder="이메일" />
        <style.TokenBox>
          <style.InputPhone type="text" placeholder="휴대폰 번호 입력" />
          <style.GetToken>인증번호 받기</style.GetToken>
        </style.TokenBox>
        <style.InputNomal type="text" placeholder="인증번호 입력" />
        <style.JoinButton>가입하기</style.JoinButton>
      </style.SignInContainer>
    </style.SignInWrap>
  );
};

export default Index;
