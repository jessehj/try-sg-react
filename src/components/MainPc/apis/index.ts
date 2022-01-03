// import { ContentType } from "../../types";
import request from "../../../network/request";
import { HttpMethod } from "../../../network/constants";

export const getNoticeList = async () => {
  const method = HttpMethod.GET;
  const url = "/posts";
  const queryParams = {
    page: 0,
    limit: 10,
    keyword: "",
  };

  const res = await request({ method, url, queryParams });

  console.log(res);

  return res;
};

export const update = () => {};
