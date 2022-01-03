import React from "react";

import Button from "./index";
import ButtonProps from "./_interface";

export default {
  component: Button,
  title: "Button",
};
const defaultProps: ButtonProps = {
  btnType: "basic_negative",
  children: "베이직 버튼",
};
export const defaultButton = () => {
  return (
    <Button btnType={defaultProps.btnType}>{defaultProps.children}</Button>
  );
};
defaultButton.story = {
  name: "basicButton",
};
const iconProps: ButtonProps = {
  btnType: "icon",
  children: "로그인/회원가입",
};
export const iconButton = () => {
  return <Button btnType={iconProps.btnType}>{iconProps.children}</Button>;
};
iconButton.story = {
  name: "loginButton",
};
const mainProps: ButtonProps = {
  btnType: "block_positive",
  children: "로그인",
};
export const mainButton = () => {
  return (
    <Button width="320px" btnType={mainProps.btnType}>
      {mainProps.children}
    </Button>
  );
};
