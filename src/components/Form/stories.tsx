import React from "react";
import Form from "./style";
import Input from "../Input";
import Span from "../Span";
import { FormProps } from "./_interface";
import Button from "../Button";
import TextButton from "../TextButton";

export default {
  component: Form,
  title: "Form",
};

const defaultProp: FormProps = {
  width: "320px",
  height: "320px",
  border: "none",
  children: (
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
        texts={[
          { text: "아이디 찾기" },
          { text: "비밀번호 찾기" },
          { text: "회원가입", color: "#397EF6" },
        ]}
        suffix=" | "
      />
    </>
  ),
};
export const defaultForm = () => {
  return (
    <Form width={defaultProp.width} height={defaultProp.height}>
      {defaultProp.children}
    </Form>
  );
};
defaultForm.story = {
  name: "loginForm",
};
