import React, { useState } from "react";
import styled from "styled-components";
import { CustomInput } from "../../styles/CustomInput";
import { CustomButton } from "../../styles/CustomButton";
import { BLUE01, GRAY05 } from "../../styles/Variables";

const MyPage = function MyPage() {
  const [isPwdChangeMode, setIsPwdChangeMode] = useState<boolean>(true);

  return (
    <Base>
      <MainContainer>
        <MyPageTitle>내 정보</MyPageTitle>
        <LoginInfoContainer>
          <LoginInfoTitle>로그인 정보</LoginInfoTitle>
          <InputContainer>
            <InputTitle>아이디</InputTitle>
            <Input disabled placeholder="siha1234" />
          </InputContainer>
          <InputContainer>
            <InputTitle>비밀번호</InputTitle>
            {!isPwdChangeMode ? (
              <PwdContainer>
                <PwdInput disabled type="password" value="123455" />
                <PwdChangeButton onClick={() => setIsPwdChangeMode(true)}>
                  비밀번호 변경
                </PwdChangeButton>
              </PwdContainer>
            ) : (
              <PwdChangeContainer>
                <ChangeInput placeholder="현재 비밀번호를 입력하세요." />
                <ChangeInput placeholder="새 비밀번호를 입력하세요." />
                <ChangeInput placeholder="새 비밀번호를 한 번 더 확인하세요." />
                <ChangeButtonContainer>
                  <CancelChange onClick={() => setIsPwdChangeMode(false)}>
                    변경 취소
                  </CancelChange>
                  <ConfirmChange>확인</ConfirmChange>
                </ChangeButtonContainer>
              </PwdChangeContainer>
            )}
          </InputContainer>
        </LoginInfoContainer>
        <UserInfoContainer>
          <UserInfoTitle>회원 정보</UserInfoTitle>
          <UserImageContainer>
            <UserImage src="images/profile-img.svg" />
            <UploadButton>upload picture</UploadButton>
            <DeleteButton>Delete</DeleteButton>
          </UserImageContainer>
          <InputContainer>
            <InputTitle>이름</InputTitle>
            <Input disabled placeholder="정시하" />
          </InputContainer>
          <InputContainer>
            <InputTitle>휴대폰</InputTitle>
            <Input disabled placeholder="010-1234-5678" />
          </InputContainer>
          <InputContainer>
            <InputTitle>이메일</InputTitle>
            <Input value="mail123@slogup.com" />
          </InputContainer>
        </UserInfoContainer>
        <SaveButton>저장하기</SaveButton>
      </MainContainer>
    </Base>
  );
};

export default MyPage;

const Base = styled.div``;

const MainContainer = styled.div`
  width: 320px;
  margin: 24px auto 0;
`;

const MyPageTitle = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 32px;
`;

const LoginInfoContainer = styled.div`
  border-bottom: 1px solid #ebecf3;
  margin-bottom: 32px;
`;

const LoginInfoTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  margin-bottom: 20px;
`;

// ㅡㅡㅡ common style ㅡㅡㅡ
const InputContainer = styled.div`
  margin-bottom: 20px;
`;

const InputTitle = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 12px;
`;

const Input = styled(CustomInput)`
  width: 100%;
`;
// ㅡㅡㅡ common style ㅡㅡㅡ

const PwdContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const PwdInput = styled(CustomInput)`
  width: 180px;
`;

const PwdChangeButton = styled(CustomButton)`
  flex: 0.95;
  height: 56px;
`;

const UserInfoContainer = styled.div``;

const UserInfoTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  margin-bottom: 20px;
`;

const UserImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px;
  margin-bottom: 20px;
`;

const UserImage = styled.img``;

const UploadButton = styled(CustomButton)`
  width: 131px;
  height: 40px;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
`;

const DeleteButton = styled(CustomButton)`
  width: 75px;
  height: 40px;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  background-color: #fff;
  border: 1px solid ${BLUE01};
  color: ${BLUE01};
`;

const SaveButton = styled(CustomButton)`
  width: 100%;
  height: 56px;
  margin-bottom: 75px;
`;

const PwdChangeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChangeInput = styled(CustomInput)`
  margin-bottom: 12px;
`;

const ChangeButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CancelChange = styled(CustomButton)`
  width: 49%;
  height: 56px;
  border: 1px solid ${GRAY05};
  background-color: #fff;
  color: ${GRAY05};
`;

const ConfirmChange = styled(CustomButton)`
  width: 49%;
  height: 56px;
`;
