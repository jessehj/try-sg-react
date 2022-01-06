import React, { useState } from "react";
import { useFormik } from "formik";
import LoginLogo from "../../assets/svgs/login-logo.svg";
import commonStrings from "../../constants/strings";
import { LoginForm, LoginWrapper } from "./style";
import FormInput from "../../components/shared/FormInput";
import FormInputBtn from "../../components/shared/FormInputBtn";
import { IValidateType, validation } from "../../components/utils";
import { IInitialValue } from "./type";

const initialValues: IInitialValue = {
  id: "",
  pwd: "",
  pwdReCheck: "",
  name: "",
  email: "",
  phone: "",
  certificationCode: "",
};

const SignUpPage: React.FC = () => {
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

  // const [min, setMin] = useState(3);
  // const [sec, setSec] = useState(0);
  // const time = useRef(180);
  // const timerId = useRef(null);
  //
  // useEffect(() => {
  //   timerId.current = setInterval(() => {
  //     setMin(parseInt(time.current / 60));
  //     setSec(time.current % 60);
  //     time.current -= 1;
  //   }, 1000);
  //
  //   return () => clearInterval(timerId.current);
  // }, []);
  //
  // useEffect(() => {
  //   // 만약 타임 아웃이 발생했을 경우
  //   if (time.current <= 0) {
  //     console.log("타임 아웃");
  //     clearInterval(timerId.current);
  //     // dispatch event
  //   }
  // }, [sec]);
  /**
   * Private Functions
   */
  const onSubmit = async () => {
    alert("로그인");
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
      setIsCertification(true);
      setError((current) => ({ ...current, [type]: error }));
      setNotice((current) => ({ ...current, [type]: notice }));
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

  // const timeFormat = (time: number) => {
  //   const m = Math.floor(time / 60).toString();
  //   let s = (time % 60).toString();
  //   if (s.length === 1) s = `0${s}`;
  //   return `${m}:${s}`;
  // };

  /**
   * Render Helpers
   */
  return (
    <LoginWrapper>
      <div className="login__wrap">
        <img src={LoginLogo} alt="LoginImage" className="login__wrap--img" />
      </div>
      <LoginForm.Wrapper>
        <LoginForm.Form onSubmit={formik.handleSubmit}>
          <LoginForm.Title>{commonStrings.TITLE_SIGNUP}</LoginForm.Title>
          <FormInputBtn
            type="text"
            valueId="id"
            placeholder={commonStrings.INPUT_ID}
            value={formik.values.id}
            onChange={formik.handleChange}
            btnValue="중복확인"
            message={notice?.id}
            onClick={(value) => checkId(value)}
            error={error?.id}
          />
          <FormInput
            type="password"
            valueId="pwd"
            placeholder={commonStrings.INPUT_PWD}
            value={formik.values.pwd}
            onChange={formik.handleChange}
            message={commonStrings.INPUT_PWD_ERROR_NOTICE}
            error={error?.pwd}
            validateCheck={handleValidate}
          />
          <FormInput
            type="password"
            valueId="pwdReCheck"
            placeholder={commonStrings.INPUT_PWD_CHECK}
            value={formik.values.pwdReCheck}
            onChange={formik.handleChange}
            message={notice?.pwdReCheck}
            error={error?.pwdReCheck}
            validateCheck={handleValidate}
          />

          <FormInput
            type="text"
            valueId="name"
            placeholder={commonStrings.INPUT_NAME}
            value={formik.values.name}
            onChange={formik.handleChange}
            message={notice?.name}
            error={error?.name}
            validateCheck={handleValidate}
          />
          <FormInput
            type="text"
            valueId="email"
            placeholder={commonStrings.INPUT_EMAIL}
            value={formik.values.email}
            onChange={formik.handleChange}
            message={notice?.email}
            error={error?.email}
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
            error={error?.phone}
          />
          {isCertification && (
            <FormInput
              type="number"
              valueId="certificationCode"
              placeholder={commonStrings.INPUT_CERTIFICATION_NUMBER}
              value={formik.values.certificationCode}
              onChange={formik.handleChange}
              message={notice?.certificationCode}
              error={error?.certificationCode}
              validateCheck={handleValidate}
            >
              {/* {min}:{sec} */}
            </FormInput>
          )}
          <LoginForm.LoginBtn
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
          </LoginForm.LoginBtn>
        </LoginForm.Form>
      </LoginForm.Wrapper>
    </LoginWrapper>
  );
};

SignUpPage.defaultProps = {};
export default SignUpPage;
