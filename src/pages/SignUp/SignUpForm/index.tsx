import React from "react";
import Form from "../../../components/Form";
import { FormProps } from "../../../components/Form/interface";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Span from "../../../components/Span";
import TextButton from "../../../components/TextButton";
import FlexContainer from "../../../style/FlexContainer";

const FormProp: FormProps = {
  width: "320px",
};
const SignUpForm: React.FC = function SignUpForm() {
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
          Sign Up
        </Span>
        <FlexContainer direction="row" height="56px" margin="24px 0 0 0">
          <Input width="213px" inputName="아이디" height="56px" />
          <Button width="99px" margin="0 0 0 8px" btnType="block_positive">
            중복확인
          </Button>
        </FlexContainer>
        <Input inputName="비밀번호" />
        <Input inputName="비밀번호 재확인" />
        <Input inputName="이름" />
        <Input inputName="이메일" />
        <Input inputName="휴대폰 번호 입력" />
        <FlexContainer direction="row" height="56px">
          <Input width="180px" inputName="인증번호 입력" />
          <Button width="132px" margin="0 0 0 8px" btnType="block_positive">
            인증번호 받기
          </Button>
        </FlexContainer>
        <Button width="320px" margin="24px 0 0 0px" btnType="block_positive">
          가입하기
        </Button>
        <TextButton texts={["이미 계정이 있으신가요", "Log In"]} suffix="? " />
      </>
    </Form>
  );
};
export default SignUpForm;
