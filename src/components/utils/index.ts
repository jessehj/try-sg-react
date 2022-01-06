import commonStrings from "../../constants/strings";

export type IIdType =
  | "id"
  | "pwd"
  | "name"
  | "email"
  | "phone"
  | "certificationCode"
  | "pwdReCheck";

export interface IValidateType {
  type: IIdType;
  value: string;
  checkValue?: string;
}

// eslint-disable-next-line consistent-return
export const validation = ({ value, type, checkValue }: IValidateType) => {
  switch (type) {
    case "id":
      if (/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{6,}$/.test(value)) {
        return {
          error: false,
          notice: undefined,
        };
      }
      return {
        error: true,
        notice: commonStrings.INPUT_ID_VALIDATE_ERROR,
      };
    case "name":
      if (/^[가-힣]{2,}|[a-zA-Z]{2,}$/.test(value)) {
        return {
          error: false,
          notice: undefined,
        };
      }
      return {
        error: true,
        notice: commonStrings.INPUT_NAME_VALIDATE_ERROR,
      };
    case "pwd":
      if (
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/.test(
          value
        )
      ) {
        return {
          error: false,
          notice: commonStrings.INPUT_PWD_ERROR_NOTICE,
        };
      }
      return {
        error: true,
        notice: commonStrings.INPUT_PWD_ERROR_NOTICE,
      };
    case "pwdReCheck":
      if (value === checkValue) {
        if (!value) {
          return {
            error: false,
            notice: commonStrings.INPUT_PWD_CHECK_SUCCESS,
          };
        }
      }
      return {
        error: true,
        notice: commonStrings.INPUT_PWD_CHECK_ERROR,
      };
    case "email":
      if (
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(
          value
        )
      ) {
        return {
          error: false,
          notice: undefined,
        };
      }
      return {
        error: true,
        notice: commonStrings.INPUT_EMAIL_VALIDATE_ERROR,
      };
    case "phone":
      if (/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/.test(value)) {
        return {
          error: false,
          notice: undefined,
        };
      }
      return {
        error: true,
        notice: commonStrings.INPUT_PHONE_VALIDATE_ERROR,
      };
    default:
      // "certificationCode 일때"
      if (value === "0531") {
        return {
          error: false,
          notice: commonStrings.INPUT_CERTIFICATION_NUMBER_SUCCESS,
        };
      }
      return {
        error: true,
        notice: commonStrings.INPUT_CERTIFICATION_NUMBER_ERROR,
      };
  }
};
