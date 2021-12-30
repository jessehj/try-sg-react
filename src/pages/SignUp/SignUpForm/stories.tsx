import React from "react";
import SignUpForm from "./index";

export default {
  component: SignUpForm,
  title: "SignUpForm",
};

export const defaultSignUpForm = () => {
  return <SignUpForm />;
};

defaultSignUpForm.story = {
  name: "SignUpForm",
};
