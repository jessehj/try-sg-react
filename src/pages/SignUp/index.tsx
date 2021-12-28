import React from "react";
import style from "./style";
import ShowSalyToggle from "../../components/ShowSalyToggle";
import SignUpInput from "../../components/SignUpInput";

const SignUp = function () {
  return (
    <style.SignUpWrap>
      <style.SignUpSize>
        <ShowSalyToggle />
        <SignUpInput />
      </style.SignUpSize>
    </style.SignUpWrap>
  );
};

export default SignUp;
