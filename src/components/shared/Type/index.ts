import React from "react";
import { IIdType, IValidateType } from "../../utils";

export interface IInputType {
  type: string;
  valueId: IIdType;
  placeholder: string;
  value?: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  children?: any;
  style?: any;
  message?: string;
  isError?: boolean;
  validateCheck?: ({ value, type }: IValidateType) => void;
}
