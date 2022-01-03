import React from "react";
import TextButton from "./index";

export default {
  component: TextButton,
  title: "TextButton",
};

const defaultTextButtonProps = {
  texts: [
    { text: "아이디 찾기" },
    { text: "비밀번호 찾기" },
    { text: "회원가입", color: "#397EF6" },
  ],
};
export const defaultTextButtons = () => {
  return <TextButton texts={defaultTextButtonProps.texts} suffix=" | " />;
};
defaultTextButtons.story = {
  name: "default",
};
