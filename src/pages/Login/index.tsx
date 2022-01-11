import React, { useState } from "react";
import { useFormik } from "formik";
import { LoginWrapper } from "../style/style";
import LoginForm from "./style";
import LoginId from "../../assets/svgs/input_profile.svg";
import LoginPwd from "../../assets/svgs/input_pwd.svg";
import commonStrings from "../../constants/strings";
import FormInput from "../../components/shared/FormInput";
import LoginLogo from "../../components/shared/LoginLogo";
import { IValidateType, validation } from "../../components/utils";

interface ILoginProps {
  setIsLogin: (b: boolean) => void;
}

const LoginPage = ({ setIsLogin }: ILoginProps) => {
  /**
   * State
   */
  const [error, setError] = useState<{ id: boolean; pwd: boolean }>({
    id: false,
    pwd: false,
  });
  const [errorNotice, setErrorNotice] = useState<{ id: string; pwd: string }>({
    id: "",
    pwd: "",
  });

  /**
   * Private Functions
   */
  const onSubmit = async () => {
    alert("Login api 요청!");
    setIsLogin(true);
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
  const handleValidate = ({ value, type }: IValidateType) => {
    const validateResult: {
      error: boolean;
      notice?: string;
    } = validation({ value, type });

    setError((current) => ({ ...current, [type]: validateResult.error }));
    setErrorNotice((current) => ({
      ...current,
      [type]: validateResult.notice,
    }));
  };

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
            message={errorNotice?.id}
            isError={error?.id}
            validateCheck={handleValidate}
          >
            <LoginForm.ImageContainer src={LoginId} alt="로그인 id 아이콘" />
          </FormInput>
          <FormInput
            type="password"
            valueId="pwd"
            placeholder={commonStrings.INPUT_PWD}
            value={formik.values.pwd}
            onChange={formik.handleChange}
            message={errorNotice?.pwd}
            isError={error?.pwd}
            validateCheck={handleValidate}
          >
            <LoginForm.ImageContainer
              src={LoginPwd}
              alt="로그인 password 아이콘"
            />
          </FormInput>
          <LoginForm.LoginBtn
            type="submit"
            disabled={
              !formik.values.id || !formik.values.pwd || error.id || error.pwd
            }
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
