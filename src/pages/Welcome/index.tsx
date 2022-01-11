import React from "react";
import LoginLogo from "../../components/shared/LoginLogo";
import commonStrings from "../../constants/strings";
import { LoginWrapper } from "../style/style";
import WelcomeForm from "./style";

const Welcome: React.FC = () => {
  /**
   * State
   */

  /**
   * Private Functions
   */

  /**
   * Event Actions
   */

  /**
   * Render Helpers
   */
  return (
    <LoginWrapper>
      <LoginLogo type="welcome" />
      <WelcomeForm.Wrapper>
        <WelcomeForm.InnerWrap>
          <WelcomeForm.TitleWrap>
            <WelcomeForm.Title>
              {commonStrings.TITLE_WELCOME_TITLE}
            </WelcomeForm.Title>
            <WelcomeForm.SubTitle>
              {commonStrings.TITLE_WELCOME_SUB}
            </WelcomeForm.SubTitle>
          </WelcomeForm.TitleWrap>
          <WelcomeForm.LoginBtn to="/login">로그인</WelcomeForm.LoginBtn>
        </WelcomeForm.InnerWrap>
      </WelcomeForm.Wrapper>
    </LoginWrapper>
  );
};

Welcome.defaultProps = {};
export default Welcome;
