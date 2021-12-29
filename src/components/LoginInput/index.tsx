import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import style from "./style";
import Theme from "../../constants/theme";
import { ReactComponent as HumanCheck } from "../../assets/images/human_check.svg";
import { ReactComponent as Human } from "../../assets/images/human.svg";
import { ReactComponent as LockCheck } from "../../assets/images/lock_check.svg";
import { ReactComponent as Lock } from "../../assets/images/lock.svg";

const LinkStyle = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  &:visited {
    color: ${Theme.Colors.GRAY_THREE};
  }
`;
const LinkSignUp = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  &:visited {
    color: ${Theme.Colors.PRIMARY_COLOR};
  }
`;
const checkTestId = {
  id: "leeks9653",
  pw: "leesy4823@@",
};
const pwPattern =
  /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
const ShowInput = function () {
  const [isIdCheck, setIdCheck] = useState<boolean>(false);
  const [isPwCheck, setPwCheck] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>("");
  const [userPw, setUserPw] = useState<string>("");

  const inputUserId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  }, []);
  const inputUserPw = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPw(e.target.value);
  }, []);
  const loginButton = useCallback(
    function () {
      if (checkTestId.id === userId && checkTestId.pw === userPw) {
        if (pwPattern.test(userPw)) {
          console.log("hello");
        }
      }
    },
    [userId, userPw]
  );
  return (
    <style.InputWrap>
      <style.InputContainer>
        <style.InputHeader>Log In</style.InputHeader>
        <style.InputInner>
          <style.InputUser toggle={isIdCheck}>
            <style.InputStyle
              placeholder="아이디"
              onFocus={() => setIdCheck(true)}
              onBlur={() => setIdCheck(false)}
              onChange={inputUserId}
            />
            {isIdCheck ? <HumanCheck /> : <Human />}
          </style.InputUser>
          <style.InputUser toggle={isPwCheck}>
            <style.InputStyle
              type="password"
              placeholder="비밀번호"
              onFocus={() => setPwCheck(true)}
              onBlur={() => setPwCheck(false)}
              onChange={inputUserPw}
            />
            {isPwCheck ? <LockCheck /> : <Lock />}
          </style.InputUser>
        </style.InputInner>
        <style.InputButton onClick={loginButton}>로그인</style.InputButton>
        <style.ChooseBoxWrap>
          <style.ChooseBoxInner>
            <li>
              <LinkStyle to="/">아이디 찾기</LinkStyle>
            </li>
            <style.SpaceStick>&nbsp;|&nbsp;</style.SpaceStick>
            <li>
              <LinkStyle to="/">비밀번호 찾기</LinkStyle>
            </li>
            <style.SpaceStick>&nbsp;|&nbsp;</style.SpaceStick>
            <li>
              <LinkSignUp to="/signup">회원가입</LinkSignUp>
            </li>
          </style.ChooseBoxInner>
        </style.ChooseBoxWrap>
      </style.InputContainer>
    </style.InputWrap>
  );
};

export default ShowInput;
