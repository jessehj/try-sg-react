import React from "react";
import LoginForm from "./index";

export default {
  component: LoginForm,
  title: "LoginForm",
};

export const defaultLoginForm = () => {
  return <LoginForm />;
};

defaultLoginForm.story = {
  name: "LoginForm",
};
