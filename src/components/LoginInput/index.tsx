import React, { useState } from "react";
import * as style from "./style";
import { ReactComponent as Human } from "../../assets/images/human.svg";
import { ReactComponent as Lock } from "../../assets/images/lock.svg";
import { ReactComponent as HumanCheck } from "../../assets/images/human_check.svg";
import { ReactComponent as LockCheck } from "../../assets/images/lock_check.svg";

const Index = function () {
  const [isIdCheck, setIdCheck] = useState<boolean>(false);
  const [isPwCheck, setPwCheck] = useState<boolean>(false);
  return (
    <>
      <style.InputUser toggle={isIdCheck}>
        <style.InputStyle
          placeholder="아이디"
          onFocus={() => setIdCheck(true)}
          onBlur={() => setIdCheck(false)}
        />
        {isIdCheck ? <HumanCheck /> : <Human />}
      </style.InputUser>
      <style.InputUser toggle={isPwCheck}>
        <style.InputStyle
          type="password"
          placeholder="비밀번호"
          onFocus={() => setPwCheck(true)}
          onBlur={() => setPwCheck(false)}
        />
        {isPwCheck ? <LockCheck /> : <Lock />}
      </style.InputUser>
    </>
  );
};
export default Index;
