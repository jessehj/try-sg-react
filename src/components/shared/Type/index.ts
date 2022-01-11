import React from "react";
import { IIdType, IValidateType } from "../../utils";

export interface IInputType {
  type: string;
  valueId: IIdType;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  message?: string;
  isError?: boolean;
  disabled?: boolean;
  validateCheck?: ({ value, type }: IValidateType) => void;
}
