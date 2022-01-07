import { request } from "../../../network/request";
import { HttpMethod } from "../../../network/constants";
import { LoginReqType, LoginResType } from "../@types";
import { EmptyResObjType } from "../../../@types/emptyResObjType";

export const loginApi = async (req: LoginReqType) => {
  const method = HttpMethod.POST;
  const url = "/account/sessions/me";
  const queryParams = undefined;
  const body = req;

  // 단일 개체 응답
  let result: LoginResType | EmptyResObjType = {
    row: {},
  };

  try {
    // instance 호출
    const res = await request<LoginResType>({
      method,
      url,
      queryParams,
      body,
    });

    if (res.status === 500) {
      const { data } = res;
      result = { row: data.row };
    }
  } catch (e) {
    console.log(e);
    alert(e);
    result = { row: {} };
  }

  return result;
};
