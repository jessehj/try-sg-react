import React from "react";
import { useFormik } from "formik";
import LoginId from "../../assets/svgs/input_profile.svg";
import LoginPwd from "../../assets/svgs/input_pwd.svg";
import commonStrings from "../../constants/strings";
import { LoginForm, LoginWrapper } from "./style";
import FormInput from "../../components/shared/FormInput";
import LoginLogo from "../../components/shared/LoginLogo";

const LoginPage: React.FC = () => {
  /**
   * State
   */

  /**
   * Private Functions
   */
  const onSubmit = async () => {
    alert("로그인");
  };

  const formik = useFormik({
    initialValues: {
      id: undefined,
      pwd: undefined,
    },
    onSubmit,
  });

  /**
   * Event Actions
   */

  /**
   * Render Helpers
   */
  return (
    <LoginWrapper>
      <LoginLogo type="login" />
      <LoginForm.Wrapper>
        <LoginForm.Form onSubmit={formik.handleSubmit}>
          <LoginForm.Title>{commonStrings.TITLE_LOGIN}</LoginForm.Title>
          <FormInput
            type="text"
            valueId="id"
            placeholder={commonStrings.INPUT_ID}
            value={formik.values.id}
            onChange={formik.handleChange}
          >
            <img src={LoginId} alt="로그인 id 아이콘" />
          </FormInput>
          <FormInput
            type="password"
            valueId="pwd"
            placeholder={commonStrings.INPUT_PWD}
            value={formik.values.pwd}
            onChange={formik.handleChange}
          >
            <img src={LoginPwd} alt="로그인 password 아이콘" />
          </FormInput>
          <LoginForm.LoginBtn
            type="submit"
            disabled={!formik.values.id || !formik.values.pwd}
          >
            로그인
          </LoginForm.LoginBtn>
        </LoginForm.Form>
        <div>
          <LoginForm.FindBtn to="/button">아이디 찾기</LoginForm.FindBtn>
          <LoginForm.FindBtn to="/button">비밀번호 찾기</LoginForm.FindBtn>
          <LoginForm.FindBtn to="/signUp">회원가입</LoginForm.FindBtn>
        </div>
      </LoginForm.Wrapper>
    </LoginWrapper>
  );
};

LoginPage.defaultProps = {};
export default LoginPage;
