import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LinkToLogin } from "../../../nav";
import { handleClick } from "../../../handlers";
import Form from "../../../components/Form";
import { FormProps } from "../../../components/Form/_interface";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Span from "../../../components/Span";
import TextButton from "../../../components/TextButton";
import FlexContainer from "../../../style/FlexContainer";

const FormProp: FormProps = {
  width: "320px",
};
const SignUpForm: React.FC = function SignUpForm() {
  const [isConfirmOpen, setConfirm] = useState(false);
  const nav = useNavigate();

  const onConfirmOpen = (e: React.MouseEvent) => {
    e.preventDefault();
    setConfirm(true);
  };
  const handleNavToLogin = (e: React.MouseEvent) => {
    handleClick(e, () => LinkToLogin(nav));
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
          Sign Up
        </Span>
        <FlexContainer
          direction="row"
          justifyContent="space-between"
          height="56px"
          margin="24px 0 0 0"
          wrap="nowrap"
        >
          <Input width="" inputName="Id" placeholder="아이디" height="56px" />
          <Button width="99px" margin="0 0 0 8px" btnType="block_positive">
            중복확인
          </Button>
        </FlexContainer>
        <Input inputName="Pwd" placeholder="비밀번호" />
        <Input inputName="PwdConfirm" placeholder="비밀번호 재확인" />
        <Input inputName="이름" />
        <Input inputName="이메일" />

        <FlexContainer
          direction="row"
          height="56px"
          justifyContent="space-between"
          wrap="nowrap"
        >
          <Input
            width=""
            height="56px"
            inputName="PhoneNumber"
            placeholder="휴대폰 번호 입력"
          />
          <Button
            width="132px"
            margin="0 0 0 8px"
            btnType="block_positive"
            onClick={onConfirmOpen}
          >
            인증번호 받기
          </Button>
        </FlexContainer>
        {isConfirmOpen === true ? (
          <Input isTimer inputName="confirm" placeholder="인증번호 입력" />
        ) : null}
        <Button width="100%" margin="24px 0 0 0px" btnType="block_positive">
          가입하기
        </Button>
        <TextButton
          texts={[
            { text: "이미 계정이 있으신가요" },
            {
              text: "Log In",
              color: "#397EF6",
              onClick: handleNavToLogin,
            },
          ]}
          suffix="? "
        />
      </>
    </Form>
  );
};
export default SignUpForm;
