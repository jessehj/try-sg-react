import { useState } from "react";

interface ITimerType {
  timer: number;
  intervalTime: number;
}

export default function useTimer({
  timer = 180,
  intervalTime = 1000,
}: ITimerType) {
  let min = 0;
  let sec = 0;
  const [time, setTime] = useState<string>("00:00");
  const [isRunning, setIsRunning] = useState<boolean>(false);

  let intervalTimer: NodeJS.Timer;

  const handleStartTimer = () => {
    setIsRunning(true);
    intervalTimer = setInterval(() => {
      // eslint-disable-next-line no-param-reassign
      timer -= 1;
      min = parseInt(String(timer / 60), 10);
      sec = parseInt(String(timer % 60), 10);

      if (timer <= 0) {
        clearInterval(intervalTimer);
        setIsRunning(false);
      }

      const timeChange = () => {
        const minute = min < 10 ? `0${min}` : min;
        const second = sec < 10 ? `0${sec}` : sec;

        return `${minute} : ${second}`;
      };
      setTime(timeChange());
    }, intervalTime);
    if (isRunning) {
      clearInterval(Number(intervalTimer) - 1);
    }
  };

  return [time, handleStartTimer] as const;
}
