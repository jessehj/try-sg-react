import axios from "axios";
import { REQUEST_TIMEOUT_DEFAULT } from "../constants";

export const axiosInstance = axios.create({
  baseURL: "https://a19d16a7-ca9f-44be-bc9e-f03f7d106d59.mock.pstmn.io",
  timeout: REQUEST_TIMEOUT_DEFAULT,
});
