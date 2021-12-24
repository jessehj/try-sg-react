import React from "react";
import style from "./style";
import ShowSalySignUp from "../../components/ShowSalySignUp";
import SignInput from "../../components/SignInput";

const SignUp = function () {
  return (
    <style.SignUpSize>
      <ShowSalySignUp />
      <SignInput />
    </style.SignUpSize>
  );
};

export default SignUp;
