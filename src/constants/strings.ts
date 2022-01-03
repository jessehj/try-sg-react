import LocalizedStrings from "react-localization";

// eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
const commonStrings = new LocalizedStrings({
  ko: {
    TITLE_LOGIN: "Log In",
    TITLE_SIGNUP: "Sign Up",
    TITLE_WELCOME_TITLE: "Welcome to SLONCH!",
    TITLE_WELCOME_SUB: "슬론치에 오신 것을 환영합니다.",

    INPUT_ID: "아이디",
    INPUT_PWD: "비밀번호",
    INPUT_PWD_CHECK: "비밀번호 재확인",
    INPUT_NAME: "이름",
    INPUT_EMAIL: "이메일",
    INPUT_PHONE: "휴대폰 번호 입력",
    INPUT_CERTIFICATION_NUMBER: "인증번호 입력",
    INPUT_PWD_MODIFY: "현재 비밀번호를 입력하세요.",
    INPUT_PWD_NEW: "새 비밀번호를 입력하세요.",
    INPUT_PWD_NEW_CHECK: "새 비밀번호를 한번 더 확인하세요.",
    INPUT_PWD_ERROR_NOTICE:
      "영문, 숫자, 특수문자 조합 6자리 이상을 입력해주세요.",
    INPUT_ID_SUCCESS_NOTICE: "사용할 수 있는 아이디입니다.",
    INPUT_CERTIFICATION_NUMBER_NOTICE: "인증번호가 확인되었습니다.",
    INPUT_SEARCH_PLACEHOLDER: "검색어를 입력해 주세요.",
    INPUT_CREATE_TITLE: "제목을 입력하세요.",

    NOTICE_LOGIN_NOTICE: "이미 계정이 있으신가요?",
    NOTICE_DELETE_NOTICE_MAIN: "삭ß제된 글은 복구가 불가능합니다.",
    NOTICE_DELETE_NOTICE_SUB: "글을 삭제하시겠습니까?",

    MENUS_HOME: "홈피드",
    MENUS_CATEGORY: "카테고리",
    MENUS_DERECTORY: "디렉토리",
    MENUS_ME_INTRO: "내 정보",
    MENUS_ME_LOGOUT: "로그아웃",
    MENUS_LOGIN: "로그인/회원가입",
  },
});

export default commonStrings;
