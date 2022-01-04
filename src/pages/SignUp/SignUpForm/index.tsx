import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import debounceFunction, {
  validatePassword,
  validateEmail,
} from "../../../util";
import {
  checkDuplicate,
  sendPhoneAuthReq,
  sendPhoneAuthVerification,
} from "../../../network/apis";
import { ErrorCode } from "../../../network/constants";
import { LinkToLogin } from "../../../nav";
import { handleChange, handleClick } from "../../../handlers";
import Form from "../../../components/Form";
import { FormProps } from "../../../components/Form/_interface";
import Button from "../../../components/Button";
import Input, { InputLayout } from "../../../components/Input";
import Span from "../../../components/Span";
import TextButton from "../../../components/TextButton";
import FlexContainer from "../../../style/FlexContainer";
import FlexItem from "../../../style/FlexItem";

const FormProp: FormProps = {
  width: "320px",
};
interface CheckList {
  pwd: string;
  email: string;
  name: string;
}
const SignUpForm: React.FC = function SignUpForm() {
  const nav = useNavigate();
  const [isConfirmOpen, setConfirm] = useState(false);
  const [idMsg, setIdMsg] = useState("");
  const [pwdMsg, setPwdMsg] = useState("");
  const [rePwdMsg, setRePwdMsg] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [phoneMsg, setPhoneMsg] = useState("");
  const [isIdCheck, setIdCheck] = useState(false);
  const [isPwdCheck, setPwdCheck] = useState(false);
  const [isEmailCheck, setEmailCheck] = useState(false);
  const [isComplete, setComplete] = useState(false);
  const initialCheckList: CheckList = {
    pwd: "비밀번호가 공백입니다.",
    email: "이메일이 공백입니다.",
    name: "이름이 공백입니다.",
  };
  const [checkList, setCheckList] = useState(initialCheckList);
  const [isCheck, setCheck] = useState(false);

  const idRef = useRef<HTMLInputElement>(null);
  const pwdRef = useRef<HTMLInputElement>(null);
  const rePwdRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const phoneTokenRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    checkAll();
  }, [isIdCheck]);

  const handleSendPhoneAuthRequest = async (e: React.MouseEvent) => {
    e.preventDefault();
    setComplete(false);
    const res = await sendPhoneAuthReq(phoneRef.current?.value);
    if (res === "empty") {
      return setPhoneMsg("핸드폰 번호를 입력하세요.");
    }
    if (res === ErrorCode.INVALID_PHONE) {
      return setPhoneMsg("핸드폰 번호를 확인해주세요.");
    }
    return setConfirm(true);
  };
  const handleSendPhoneAuthVerification = async (e: React.MouseEvent) => {
    e.preventDefault();
    const res = await sendPhoneAuthVerification(phoneTokenRef.current?.value);
    if (res === "empty") {
      return setPhoneMsg("일련번호를 입력해주세요.");
    }
    if (res === ErrorCode.INVALID_PHONE_AUTH_CODE) {
      return setPhoneMsg("잘못된 인증코드입니다.");
    }
    setConfirm(false);
    setCheck(false);
    setPhoneMsg("");
    return setComplete(true);
  };
  const handleNavToLogin = (e: React.MouseEvent) => {
    handleClick(e, () => LinkToLogin(nav));
  };
  const handleConfirmPwd = (e: React.ChangeEvent) => {
    handleChange(e, () => debounceFunction(checkPwdAndRePwd(), 200));
  };
  const handleValidatePwd = (e: React.ChangeEvent) => {
    handleChange(e, () => debounceFunction(validatePwd(), 200));
  };
  const handleValidateEmail = (e: React.ChangeEvent) => {
    handleChange(e, () => debounceFunction(validateMail(), 200));
  };
  const handleCheckDuplicate = async (e: React.MouseEvent) => {
    e.preventDefault();
    checkAll();
    const res = await checkDuplicate(idRef.current?.value);
    console.log(res);
    if (res === "ok") {
      setIdCheck(true);

      return setIdMsg("가능한 아이디 입니다.");
    }
    if (res === "no")
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      return setIdMsg(`${idRef.current?.value} : 아이디가 이미 존재합니다.`);
    if (res === "empty") return setIdMsg("입력 값이 없습니다.");
    return setIdMsg("없습니다.");
  };

  const checkPwdAndRePwd = function checkPwd() {
    setComplete(false);
    setConfirm(false);
    if (rePwdRef.current?.value === "") return setRePwdMsg("");
    confirmPwd();
    checkAll();
    return setRePwdMsg(
      pwdRef.current?.value === rePwdRef.current?.value
        ? ""
        : "비밀번호가 다릅니다."
    );
  };
  const confirmPwd = () => {
    if (pwdRef.current?.value === rePwdRef.current?.value)
      return setPwdCheck(validatePassword(pwdRef.current?.value) === "");
    return setPwdCheck(false);
  };
  const confirmEmail = () => {
    setEmailCheck(validateEmail(emailRef.current?.value) === "");
  };
  const confirmAll = function () {
    const newCheckList = { ...checkList };

    if (isPwdCheck === false) newCheckList.pwd = "비밀번호가 잘못되었습니다.";
    else newCheckList.pwd = "";
    if (isEmailCheck === false) newCheckList.email = "이메일이 잘못되었습니다.";
    else newCheckList.email = "";
    if (nameRef.current?.value === "")
      newCheckList.name = "이름이 잘못되었습니다.";
    else newCheckList.name = "";

    setCheckList(newCheckList);
  };
  const checkAll = () => {
    confirmAll();

    if (
      checkList.pwd === "" &&
      isIdCheck &&
      checkList.email === "" &&
      checkList.name === "" &&
      phoneRef.current &&
      phoneRef.current?.value.length > 8 &&
      rePwdRef.current?.value === pwdRef.current?.value
    )
      return setCheck(true);
    return setCheck(false);
  };
  const validatePwd = function validatePwd() {
    setPwdCheck(false);
    setComplete(false);
    if (pwdRef.current?.value === "") return setPwdMsg("");

    if (rePwdRef.current?.value !== "") {
      checkPwdAndRePwd();
      confirmPwd();
      checkAll();
      return setPwdMsg(validatePassword(pwdRef.current?.value));
    }
    return setPwdMsg(validatePassword(pwdRef.current?.value));
  };
  const validateMail = function validateMail() {
    setComplete(false);
    if (emailRef.current?.value === "") return setEmailMsg("");
    confirmEmail();

    checkAll();
    return setEmailMsg(validateEmail(emailRef.current?.value));
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
          margin="24px 0 12px 0"
          wrap="nowrap"
        >
          <StyledIdInput>
            <Input
              width="100%"
              inputName="Id"
              placeholder="아이디"
              height="56px"
              ref={idRef}
              onChange={() => {
                setIdCheck(false);
                setComplete(false);
              }}
            />
          </StyledIdInput>
          <Button
            width="99px"
            margin="0 0 0 8px"
            btnType="block_positive"
            onClick={handleCheckDuplicate}
          >
            중복확인
          </Button>
        </FlexContainer>
        {idMsg ? (
          <Span
            color="#FF6262"
            fontSize="12px"
            fontWeight="normal"
            lineHeight="18px"
            margin="0 0 0 10px"
            width="100%"
          >
            {idMsg}
          </Span>
        ) : null}
        <Input
          inputName="Pwd"
          placeholder="비밀번호"
          type="password"
          height="56px"
          ref={pwdRef}
          onChange={handleValidatePwd}
        />
        <Span
          color="#BABABA"
          fontSize="12px"
          fontWeight="normal"
          lineHeight="18px"
          margin="0 0 0 10px"
          width="100%"
        >
          *영문, 숫자, 특수문자 조합 6자리 이상을 입력해주세요.
        </Span>
        <Input
          inputName="PwdConfirm"
          placeholder="비밀번호 재확인"
          type="password"
          height="56px"
          ref={rePwdRef}
          onChange={handleConfirmPwd}
          message={pwdMsg}
        />
        {rePwdMsg ? (
          <FlexItem>
            <Span
              color="#FF6262"
              fontSize="12px"
              fontWeight="normal"
              lineHeight="18px"
              margin="0 0 0 10px"
              width="100%"
            >
              {rePwdMsg}
            </Span>
          </FlexItem>
        ) : null}
        <Input
          inputName="name"
          placeholder="이름"
          height="56px"
          ref={nameRef}
          onChange={() => checkAll()}
        />
        <Input
          inputName="email"
          placeholder="이메일"
          ref={emailRef}
          height="56px"
          onChange={handleValidateEmail}
          message={emailMsg}
        />

        <FlexContainer
          direction="row"
          height="56px"
          justifyContent="space-between"
          wrap="nowrap"
          margin="12px 0 0 0 "
        >
          <Input
            width=""
            height="56px"
            inputName="PhoneNumber"
            placeholder="휴대폰 번호 입력"
            ref={phoneRef}
            onChange={() => checkAll()}
          />
          {/* eslint-disable-next-line no-nested-ternary */}
          {isConfirmOpen === true ? (
            <Button
              width="132px"
              margin="0 0 0 8px"
              btnType="block_positive"
              onClick={handleSendPhoneAuthVerification}
            >
              인증번호 확인
            </Button>
          ) : (
            <Button
              width="132px"
              margin="0 0 0 8px"
              btnType={isCheck ? "block_positive" : "block-positive_disabled"}
              onClick={isCheck ? handleSendPhoneAuthRequest : () => null}
            >
              인증번호 받기
            </Button>
          )}
        </FlexContainer>
        {phoneMsg ? (
          <Span
            color="#FF6262"
            fontSize="12px"
            fontWeight="normal"
            lineHeight="18px"
            margin="0 0 0 10px"
            width="100%"
          >
            {phoneMsg}
          </Span>
        ) : null}
        {isConfirmOpen === true ? (
          <Input
            margin="20px 0 0 0 "
            isTimer
            inputName="confirm"
            placeholder="인증번호 입력"
            height="56px"
            ref={phoneTokenRef}
          />
        ) : null}
        {isComplete === true ? (
          <Button width="100%" margin="24px 0 0 0" btnType="block_positive">
            가입하기
          </Button>
        ) : (
          <Button
            width="100%"
            margin="24px 0 0 0px"
            btnType="block_positive_disabled"
          >
            가입하기
          </Button>
        )}
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

const StyledIdInput = styled(InputLayout)`
  width: 100%;
`;
