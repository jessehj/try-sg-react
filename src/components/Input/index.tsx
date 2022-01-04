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
      type,

      onChange,
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [isReadOnly, setReadOnly] = useState(false);
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

            setReadOnly(true);
            return setTimer("00:00");
          }
          time -= 1000;
          timerMinute = String(Math.floor(time / minute));
          timerSecond = String(Math.floor((time % minute) / second));
          if (timerSecond.length === 1) timerSecond = `0${timerSecond}`;
          return setTimer(`0${timerMinute}:${timerSecond}`);
        }, 1000);
      }
      return () => {
        setTimer("03:00");
      };
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
            onChange={onChange}
            type={type || "text"}
            readOnly={isReadOnly}
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
        {message ? (
          <Span
            color="#FF6262"
            fontSize="12px"
            fontWeight="normal"
            lineHeight="18px"
            margin="0 0 0 10px"
          >
            {message}
          </Span>
        ) : null}
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
  top: 36px;
  left: 80%;
`;
