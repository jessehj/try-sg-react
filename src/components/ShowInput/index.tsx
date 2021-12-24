import React from "react";
import style from "./style";
import InputBox from "../InputBox";

const Index = function () {
  return (
    <style.InputWrap>
      <style.InputContainer>
        <style.InputHeader>Log In</style.InputHeader>
        <InputBox />
        <style.InputButton>로그인</style.InputButton>
      </style.InputContainer>
    </style.InputWrap>
  );
};

export default Index;
