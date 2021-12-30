import React from "react";
import Span from "../../../components/Span";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import TextButton from "../../../components/TextButton";
import Form from "../../../components/Form";
import { FormProps } from "../../../components/Form/interface";

const FormProp: FormProps = {
  width: "320px",
};
const LoginForm: React.FC = function LoginForm() {
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
        <Input inputName="아이디" />
        <Input inputName="비밀번호" />
        <Button margin="0 0" btnType="block_positive">
          로그인
        </Button>
        <TextButton
          texts={["아이디 찾기", "비밀번호 찾기", "회원가입"]}
          suffix=" | "
        />
      </>
    </Form>
  );
};
export default LoginForm;
