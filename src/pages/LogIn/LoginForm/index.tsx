import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Span from "../../../components/Span";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import TextButton from "../../../components/TextButton";
import Form from "../../../components/Form";
import { FormProps } from "../../../components/Form/_interface";
import { handleClick } from "../../../handlers";
import { LinkToSignup } from "../../../nav";

import { sendLoginAction } from "../../../redux/actions";
import { LoginRequestInterface } from "../../../network/types";

const FormProp: FormProps = {
  width: "320px",
};
const LoginForm: React.FC = function LoginForm() {
  const nav = useNavigate();

  const dispatch = useDispatch();
  const IdRef = useRef<HTMLInputElement>(null);
  const PwdRef = useRef<HTMLInputElement>(null);
  const handlePressButtonNavToSignUp = (e: React.MouseEvent) => {
    handleClick(e, () => LinkToSignup(nav));
  };
  const handlePressButtonLogin = (accountId: string, password: string) => {
    const data: LoginRequestInterface = {
      accountId,
      password,
    };

    return dispatch(sendLoginAction.request(data));
  };

  return (
    <Form width={FormProp.width}>
      <>
        <Span
          fontWeight="700"
          fontStyle="normal"
          fontSize="24px"
          lineHeight="36px"
          textAlign="left"
        >
          Log In
        </Span>
        <Input inputName="아이디" ref={IdRef} />
        <Input inputName="비밀번호" ref={PwdRef} />
        <Button
          margin="10px 0 20px 0"
          btnType="block_positive"
          width="100%"
          onClick={(e) =>
            handleClick(e, () =>
              handlePressButtonLogin(
                IdRef.current?.value as string,
                PwdRef.current?.value as string
              )
            )
          }
        >
          로그인
        </Button>
        <TextButton
          texts={[
            { text: "아이디 찾기" },
            { text: "비밀번호 찾기" },
            {
              text: "회원가입",
              color: "#397EF6",
              onClick: handlePressButtonNavToSignUp,
            },
          ]}
          suffix=" | "
        />
      </>
    </Form>
  );
};
export default LoginForm;
