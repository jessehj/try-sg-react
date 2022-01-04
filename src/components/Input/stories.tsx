import React from "react";

import Input from "./index";
import InputProps from "./_interface";

export default {
  component: Input,
  title: "Input",
};
const defaultProps: InputProps = {
  inputName: "default",
  children: undefined,
};
export const defaultInput = () => {
  return <Input inputName={defaultProps.inputName} />;
};
defaultInput.story = {
  name: "defaultInput",
};
const idProps: InputProps = {
  inputName: "Id",
  children: undefined,
};
export const idInput = () => {
  return (
    <Input
      isTimer
      placeholder="아이디"
      message="안녕하세요"
      inputName={idProps.inputName}
    >
      아이디
    </Input>
  );
};
const pwdProps: InputProps = {
  inputName: "Pwd",
  children: undefined,
};
export const pwdInput = () => {
  return <Input placeholder="비밀 번호" inputName={pwdProps.inputName} />;
};
idInput.story = {
  name: "idInput",
};
pwdInput.story = {
  name: "pwdInput",
};
