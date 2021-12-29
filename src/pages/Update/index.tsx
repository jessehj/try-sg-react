import React, { useState } from "react";
import style from "./style";
import { ReactComponent as Picture } from "../../assets/images/user_image.svg";

const Update = function () {
  const [isChangePw, setIsChangePw] = useState<boolean>(false);
  return (
    <style.UpdateWrap>
      <style.UpdateSize>
        <style.UpdateTitle>내 정보</style.UpdateTitle>
        <style.UpdateSubTitle>로그인 정보</style.UpdateSubTitle>
        <style.InputWrap>
          <style.InputTitle>아이디</style.InputTitle>
          <style.UpdateInputStyle
            type="text"
            placeholder="아이디"
            disabled
            value="이름"
          />
        </style.InputWrap>
        {isChangePw ? (
          <style.InputWrap>
            <style.InputTitle>비밀번호</style.InputTitle>
            <style.GoChangePwButtonWrap>
              <style.UpdatePwInputStyle
                type="password"
                placeholder="비밀번호"
                disabled
                value="00000000"
              />
              <style.GoChangePwButton
                type="button"
                onClick={() => setIsChangePw(!isChangePw)}
              >
                비밀번호 변경
              </style.GoChangePwButton>
            </style.GoChangePwButtonWrap>
          </style.InputWrap>
        ) : (
          <style.InputWrap>
            <style.InputTitle>비밀번호</style.InputTitle>
            <div>
              <style.UpdateInputStyle
                type="password"
                placeholder="현재 비밀번호를 입력하세요."
              />
              <style.UpdateInputStyle
                type="password"
                placeholder="새 비밀번호를 입력하세요."
              />
              <style.UpdateInputStyle
                type="password"
                placeholder="새 비밀번호를 한 번 더 확인하세요."
              />
              <style.ChangeButtonWrap>
                <style.ChangePwButton
                  type="button"
                  onClick={() => setIsChangePw(!isChangePw)}
                >
                  변경 취소
                </style.ChangePwButton>
                <style.ChangePwButton type="button">확인</style.ChangePwButton>
              </style.ChangeButtonWrap>
            </div>
          </style.InputWrap>
        )}
        <style.HrLine />
        <h5>회원정보</h5>
        <style.PictureUpdateWrap>
          <Picture />
          <style.PictureUploadButton type="button">
            Upload picture
          </style.PictureUploadButton>
          <style.PictureDeleteButton type="button">
            Delete
          </style.PictureDeleteButton>
        </style.PictureUpdateWrap>
        <style.InputWrap>
          <style.InputTitle>이름</style.InputTitle>
          <style.UpdateInputStyle type="text" disabled value="123" />
        </style.InputWrap>
        <style.InputWrap>
          <style.InputTitle>휴대폰</style.InputTitle>
          <style.UpdateInputStyle type="text" disabled value="123" />
        </style.InputWrap>
        <style.InputWrap>
          <style.InputTitle>이메일</style.InputTitle>
          <style.UpdateInputStyle type="text" placeholder="이메일" />
        </style.InputWrap>
        <style.SaveButton type="button">저장하기</style.SaveButton>
      </style.UpdateSize>
    </style.UpdateWrap>
  );
};

export default Update;
