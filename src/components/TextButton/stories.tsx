import React from "react";
import TextButton from "./index";

export default {
  component: TextButton,
  title: "TextButton",
};

const defaultTextButtonProps = {
  texts: ["아이디 찾기", "비밀번호 찾기", "회원가입"],
};
export const defaultTextButtons = () => {
  return <TextButton texts={defaultTextButtonProps.texts} suffix=" | " />;
};
defaultTextButtons.story = {
  name: "default",
};
