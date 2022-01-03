import { ForwardedRef } from "react";

export default interface InputProps {
  margin?: string;
  width?: string;
  height?: string;
  inputName?: string;
  placeholder?: string;
  children?: string;
  message?: string;
  isTimer?: boolean;
  ref?: ForwardedRef<HTMLInputElement>;
}
