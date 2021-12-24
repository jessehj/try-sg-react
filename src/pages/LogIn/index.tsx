import React from "react";
import ShowInput from "../../components/ShowInput";
import ShowSaly from "../../components/ShowSaly";
import style from "./style";

const LogIn = function () {
  return (
    <style.LoginWrap>
      <style.LoginSize>
        <ShowSaly />
        <ShowInput />
      </style.LoginSize>
    </style.LoginWrap>
  );
};

export default LogIn;
