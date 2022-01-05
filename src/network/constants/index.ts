export const REQUEST_TIMEOUT_DEFAULT = 200000;
export const REQUEST_LIMIT_DEFAULT = 25;

export enum HttpMethod {
  GET = "get",
  POST = "post",
  PUT = "put",
  PATCH = "patch",
  DELETE = "delete",
}

export enum ErrorCode {
  //  Invalid Auth Token
  INVALD_AUTH_TOKEN = "invalidAuthToken",

  // Invalid String Cert Token
  WRONG_CERT = "wrongCert",
  EXPIRED_CERT = "expiredCert",

  //  Login Error

  WRONG_PASSWORD = "wrongPassword",
  NO_USER = "",

  //  ID conflict

  DUPLICATE_UD = "duplicatedId",

  // Input Error

  INVALID_ID = "invalidId",
  INVALID_PHONE = "invalidPhone",
  REQUIRE_PHONE = "requirePhone",

  // Invalid Phone Auth Code

  INVALID_PHONE_AUTH_CODE = "wrongAuthCode",

  //  Invalid User

  INVALID_USER = "invalidUser",

  // Invalid Title

  INVALID_TITLE = "invalidTitle",
}

export enum URL {
  LOGIN_POST = "account/sessions/me",
  MYPAGE_GET = "account/sessions/me",
  LOGOUT_DELETE = "account/sessions/me",
  DUPLICATION_ID_GET = "account/id-duplication",
  SEND_MSG_TOKEN_POST = "sender/message-auth-tokens",
  SIGN_UP = "account/users",
  POST_GET = "posts/",
  POST_ONE_GET = "posts/",
  POST_POST = "posts/",
  POST_PUT = "posts/",
  POST_DELETE = "posts/",
  POST_UPLOAD_IMAGE_POST = "uploader/images",
}
