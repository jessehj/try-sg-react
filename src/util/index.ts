import {
  EMPTY_PWD,
  EXCEED_PWD_LENGTH,
  MIN_PWD_LENGTH,
  NO_TRIM_PWD,
  NO_TYPE_MATCH_EMAIL,
  NO_TYPE_MATCH_PWD,
} from "./constants";

const debounceFunction = (callback: any, delay: any) => {
  let timer: NodeJS.Timeout;
  return (...args: any) => {
    // 실행한 함수(setTimeout())를 취소
    clearTimeout(timer);
    // delay가 지나면 callback 함수를 실행
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-argument
    timer = setTimeout(() => callback(...args), delay);
  };
};
export default debounceFunction;
export const validatePassword = (pwd: string | undefined): string => {
  if (pwd !== undefined) {
    if (pwd !== undefined && pwd.length < MIN_PWD_LENGTH)
      return EXCEED_PWD_LENGTH;

    if (!/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9])/.test(pwd)) {
      return NO_TYPE_MATCH_PWD;
    }

    if (pwd.search(/\s/) !== -1) return NO_TRIM_PWD;
    return "";
  }
  return EMPTY_PWD;
};
export const validateEmail = (email: string | undefined): string => {
  if (email !== undefined) {
    const trimmedEmail = email.trim();
    const regEmail =
      /^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    return !regEmail.test(trimmedEmail) ? NO_TYPE_MATCH_EMAIL : "";
  }
  return "이메일이 공백입니다.";
};
