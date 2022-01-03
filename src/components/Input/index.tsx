import React, { useEffect, useState, forwardRef, ForwardedRef } from "react";

import styled from "styled-components";
import StyledInput from "./styles";
import InputProps from "./_interface";
import Span from "../Span";

const Input: React.FC<InputProps> = forwardRef(
  (
    {
      width,
      height,
      margin,
      inputName,
      placeholder,
      isTimer = false,
      children,
      message,
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const msg = message;
    let time = 180000;

    const minute = 60000;
    const second = 1000;
    let timerMinute = String(Math.floor(time / minute));
    let timerSecond = String(Math.floor((time % minute) / second));
    if (String(timerSecond).length === 1) timerSecond = `0${timerSecond}`;
    const [timer, setTimer] = useState(`0${timerMinute}:${timerSecond}`);

    useEffect(() => {
      if (isTimer) {
        const TimerInterval = setInterval(() => {
          if (time <= 0) {
            clearInterval(TimerInterval);
            return setTimer("00:00");
          }
          time -= 1000;
          timerMinute = String(Math.floor(time / minute));
          timerSecond = String(Math.floor((time % minute) / second));
          if (timerSecond.length === 1) timerSecond = `0${timerSecond}`;
          return setTimer(`0${timerMinute}:${timerSecond}`);
        }, 1000);
      }
    }, []);
    return (
      <>
        <InputLayout width={width}>
          <StyledInput
            width={width}
            height={height}
            margin={margin}
            placeholder={placeholder || inputName}
            inputName={inputName}
            name={inputName}
            value={children}
            ref={ref}
          />
          {isTimer === true ? (
            <Timer>
              <Span
                color="#FF6262"
                fontSize="16px"
                fontWeight="bold"
                lineHeight="24px"
              >
                {timer}
              </Span>
            </Timer>
          ) : null}
        </InputLayout>
        {msg ? <Span color="#FF6262">{msg}</Span> : null}
      </>
    );
  }
);

export default Input;

export const InputLayout = styled.div<{ width?: string }>`
  position: relative;
`;
const Timer = styled.div`
  position: absolute;
  top: 16px;
  left: 80%;
`;
