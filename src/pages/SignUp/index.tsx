import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { LoginWrapper } from "../style/style";
import SignUpForm from "./style";
import { IInitialValue } from "./type";
import useTimer from "../../hooks/useTimer";
import commonStrings from "../../constants/strings";
import FormInput from "../../components/shared/FormInput";
import FormInputBtn from "../../components/shared/FormInputBtn";
import { IValidateType, validation } from "../../components/utils";
import LoginLogo from "../../components/shared/LoginLogo";

const initialValues: IInitialValue = {
  id: "",
  pwd: "",
  pwdReCheck: "",
  name: "",
  email: "",
  phone: "",
  certificationCode: "",
};

const SignUpPage = () => {
  const navigate = useNavigate();
  /**
   * State
   */
  const [notice, setNotice] = useState<{ [type: string]: string | undefined }>({
    id: undefined,
    pwd: undefined,
    pwdReCheck: undefined,
    name: undefined,
    email: undefined,
    phone: undefined,
    certificationCode: undefined,
  });
  const [error, setError] = useState<{ [key: string]: boolean }>({
    id: false,
    pwd: false,
    pwdReCheck: false,
    name: false,
    email: false,
    phone: false,
    certificationCode: false,
  });
  const [isCertification, setIsCertification] = useState<boolean>(false);
  const [timer, startTimer] = useTimer({
    timer: 180,
    intervalTime: 1000,
  });
  /**
   * Private Functions
   */
  const onSubmit = async () => {
    console.log("error", error);
    // TODO: 여기서 에러 있을 때 회원가입 통과 막아야함
    // eslint-disable-next-line react/destructuring-assignment
    navigate("/welcome");
  };

  const handleValidate = ({ value, type }: IValidateType) => {
    let validateResult: {
      error: boolean;
      notice?: string;
    };

    if (type === "pwdReCheck") {
      validateResult = validation({
        value,
        type,
        checkValue: formik.values.pwd,
      });
    } else {
      validateResult = validation({ value, type });
    }
    setError((current) => ({ ...current, [type]: validateResult.error }));
    setNotice((current) => ({ ...current, [type]: validateResult.notice }));
  };

  // const handlePwdRecheck = ({ value }: { value: string }) => {
  //   /**
  //    * 문제점
  //    * 1. password 변경될 시 pwdReCheck 에서도 에러값 변경
  //    * 2. 빈 Password 값 일 때 PwdReCheck 에서는 check 필요없음
  //    */
  //   if (formik.values.pwd) {
  //     // 이때만 validate 체크
  //   }
  // };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  /**
   * Event Actions
   */

  const handleBtnError = (
    type: "id" | "phone",
    error: boolean,
    notice?: string
  ) => {
    if (!error) {
      setError((current) => ({ ...current, [type]: error }));
      setNotice((current) => ({ ...current, [type]: notice }));
      if (type === "phone") {
        setIsCertification(true);
        // 통과시에 Timer 작동 핸들러
        startTimer();
      }
    } else {
      setError((current) => ({ ...current, [type]: error }));
      setNotice((current) => ({ ...current, [type]: notice }));
    }
  };

  const checkId = (value?: string) => {
    if (!value) {
      setError({ id: true });
      setNotice({ id: commonStrings.INPUT_ID_EMPTY_ERROR });
    } else {
      const result = validation({ value, type: "id" });
      handleBtnError("id", result.error, result.notice);
    }
  };

  const getValidateCode = (value?: string) => {
    if (!value) {
      setError({ phone: true });
      setNotice({ phone: "핸드폰 번호를 입력해주세요." });
    } else {
      const result = validation({ value, type: "phone" });
      handleBtnError("phone", result.error, result.notice);
    }
  };

  /**
   * Render Helpers
   */
  return (
    <LoginWrapper>
      <LoginLogo type="signUp" />
      <SignUpForm.Wrapper>
        <SignUpForm.Form onSubmit={formik.handleSubmit}>
          <SignUpForm.Title>{commonStrings.TITLE_SIGNUP}</SignUpForm.Title>
          <FormInputBtn
            type="text"
            valueId="id"
            placeholder={commonStrings.INPUT_ID}
            value={formik.values.id}
            onChange={formik.handleChange}
            btnValue="중복확인"
            message={notice?.id}
            onClick={(value) => checkId(value)}
            isError={error?.id}
          />
          <FormInput
            type="password"
            valueId="pwd"
            placeholder={commonStrings.INPUT_PWD}
            value={formik.values.pwd}
            onChange={formik.handleChange}
            message={commonStrings.INPUT_PWD_ERROR_NOTICE}
            isError={error?.pwd}
            validateCheck={handleValidate}
          />
          <FormInput
            type="password"
            valueId="pwdReCheck"
            placeholder={commonStrings.INPUT_PWD_CHECK}
            value={formik.values.pwdReCheck}
            onChange={formik.handleChange}
            message={notice?.pwdReCheck}
            isError={error?.pwdReCheck}
            validateCheck={handleValidate}
          />
          <FormInput
            type="text"
            valueId="name"
            placeholder={commonStrings.INPUT_NAME}
            value={formik.values.name}
            onChange={formik.handleChange}
            message={notice?.name}
            isError={error?.name}
            validateCheck={handleValidate}
          />
          <FormInput
            type="text"
            valueId="email"
            placeholder={commonStrings.INPUT_EMAIL}
            value={formik.values.email}
            onChange={formik.handleChange}
            message={notice?.email}
            isError={error?.email}
            validateCheck={handleValidate}
          />
          <FormInputBtn
            type="text"
            valueId="phone"
            placeholder={commonStrings.INPUT_PHONE}
            value={formik.values.phone}
            onChange={formik.handleChange}
            btnValue="인증번호 받기"
            message={notice?.phone}
            onClick={(value) => getValidateCode(value)}
            isError={error?.phone}
          />
          {isCertification && (
            <FormInput
              type="number"
              valueId="certificationCode"
              placeholder={commonStrings.INPUT_CERTIFICATION_NUMBER}
              value={formik.values.certificationCode}
              onChange={formik.handleChange}
              message={notice?.certificationCode}
              isError={error?.certificationCode}
              validateCheck={handleValidate}
            >
              <SignUpForm.Timer>{timer}</SignUpForm.Timer>
            </FormInput>
          )}
          <SignUpForm.LoginBtn
            type="submit"
            disabled={
              !formik.values.id ||
              !formik.values.pwd ||
              !formik.values.pwdReCheck ||
              !formik.values.name ||
              !formik.values.email
            }
          >
            가입하기
          </SignUpForm.LoginBtn>
        </SignUpForm.Form>
        <SignUpForm.BackToLogin>
          이미 계정이 있으신가요?
          <SignUpForm.BackToLoginLink to="/login">
            Log In
          </SignUpForm.BackToLoginLink>
        </SignUpForm.BackToLogin>
      </SignUpForm.Wrapper>
    </LoginWrapper>
  );
};

SignUpPage.defaultProps = {};
export default SignUpPage;
