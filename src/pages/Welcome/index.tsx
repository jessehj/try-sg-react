import React from "react";
import style from "./style";
import ShowSalyToggle from "../../components/ShowSalyToggle";

const Welcome = function () {
  return (
    <style.WelcomeWrap>
      <style.WelcomeSize>
        <ShowSalyToggle />
        <style.WelcomeContainer>
          <style.WelcomeInner>
            <style.WelcomeTextBox>
              <style.WelcomeTitle>Welcome to SLONCH!</style.WelcomeTitle>
              <div>슬론치에 오신 것을 환영합니다.</div>
            </style.WelcomeTextBox>
            <style.WelcomeButton type="button">로그인</style.WelcomeButton>
          </style.WelcomeInner>
        </style.WelcomeContainer>
      </style.WelcomeSize>
    </style.WelcomeWrap>
  );
};

export default Welcome;
