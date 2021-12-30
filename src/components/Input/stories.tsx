import React from "react";

import Input from "./index";
import InputProps from "./interface";

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
  inputName: "id",
  children: undefined,
};
export const idInput = () => {
  return <Input inputName={idProps.inputName} />;
};
idInput.story = {
  name: "idInput",
};
