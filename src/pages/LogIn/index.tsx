import React from "react";
import LoginInput from "../../components/LoginInput";
import ShowSaly from "../../components/ShowSaly";
import style from "./style";

const LogIn = function () {
  return (
    <style.LoginWrap>
      <style.LoginSize>
        <ShowSaly />
        <LoginInput />
      </style.LoginSize>
    </style.LoginWrap>
  );
};

export default LogIn;
