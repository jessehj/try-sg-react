import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import Form from "../../../components/Form";
import Span from "../../../components/Span";
import TitleSpan from "../TitleSpan";
import SmallTitleSpan from "../SmallTitleSpan";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import CircleImage from "../../../components/CircleImage";
import Hr from "../../../components/Hr";
import FlexContainer from "../../../style/FlexContainer";
import exampleImg from "../../../assets/image/exampleUser.svg";
import { getUserInfo } from "../../../network/apis";
import { LoginResponseRowInterface } from "../../../network/types";

import { RootState } from "../../../redux/reducers";

const MyPageForm: React.FC = function MyPageForm() {
  const logins = useSelector((state: RootState) => state.login);
  const [name, setName] = useState(logins.row.name);

  const [id, setId] = useState(logins.row.id);
  const [phone, setPhone] = useState(logins.row.phone);
  const [email, setEmail] = useState(logins.row.email);
  const [isChange, setChange] = useState(false);
  const pwdRef = useRef<HTMLInputElement>(null);
  const changedPwdRef = useRef<HTMLInputElement>(null);
  const confirmChangedPwdRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    getUserInformation()
      .then((val) => {
        if (typeof val === "string") {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          const res: LoginResponseRowInterface = JSON.parse(val);
          if (res.name) setName(res.name);
          if (res.accountId) setId(res.accountId);
          if (res.phone) setPhone(res.phone);
          if (res.email) setEmail(res.email);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const getUserInformation = async () => {
    const res = await getUserInfo();

    return res;
  };
  return (
    <Form width="320px" height="fit-content" margin="0 0 0 0">
      <FlexContainer direction="column" height="max-content">
        <Span
          fontWeight="bold"
          fontSize="24px"
          lineHeight="36px"
          margin="32px 0px"
          textAlign="left"
        >
          내 정보
        </Span>
        <TitleSpan>로그인 정보</TitleSpan>
      </FlexContainer>
      <SmallTitleSpan>아이디</SmallTitleSpan>
      <Input inputName="아이디" margin="12px 0 20px 0" placeholder={id} />

      <SmallTitleSpan>비밀번호</SmallTitleSpan>
      {isChange === false ? (
        <FlexContainer
          width="320px"
          direction="row"
          height="fit-content"
          margin="0px 0 32px 0"
        >
          <Input
            type="password"
            inputName="비밀번호"
            width="180px"
            margin="12px 8px 0px 0px"
            ref={pwdRef}
            placeholder="········"
          />

          <Button
            btnType="block-positive"
            width="fit-content"
            margin="12px 0 0 0"
            onClick={() => setChange(true)}
          >
            비밀번호 변경
          </Button>
        </FlexContainer>
      ) : null}
      {isChange === true ? (
        <>
          <Input
            type="willChangePassword"
            inputName="password"
            width="100%"
            margin="12px 8px 0px 0px"
            placeholder="현재 비밀번호를 입력하세요."
            ref={pwdRef}
          />
          <Input
            type="willChangePassword"
            inputName=""
            width="100%"
            margin="12px 8px 0px 0px"
            placeholder="새 비밀번호를 입력하세요."
            ref={changedPwdRef}
          />
          <Input
            type="confirmChangePassword"
            inputName="새 비밀번호를 한 번 더 확인하세요."
            width="100%"
            margin="12px 8px 0px 0px"
            ref={confirmChangedPwdRef}
          />
          <FlexContainer
            direction="row"
            wrap="nowrap"
            width="320px"
            margin="20px 0 0 0 "
            alignItems="flex-start"
          >
            <Button
              btnType="block-negative"
              margin="12px 0 0 0"
              width="156px"
              onClick={() => setChange(false)}
            >
              변경 취소
            </Button>
            <Button
              btnType="block-positive"
              margin="12px 0 0 12px"
              onClick={() => setChange(true)}
              width="156px"
            >
              확인
            </Button>
          </FlexContainer>
        </>
      ) : null}
      <Hr />
      <TitleSpan>회원 정보</TitleSpan>
      <FlexContainer
        direction="row"
        height="fit-content"
        margin="20px 0"
        wrap="nowrap"
      >
        <CircleImage src={exampleImg} margin="0px 20px 0 0px" />
        <Button
          btnType="basic-positive"
          width="fit-content"
          margin="20px 8px 20px 0px"
        >
          Upload picture
        </Button>
        <Button
          btnType="basic-negative"
          width="fit-content"
          margin="20px 0px 20px 0"
        >
          Delete
        </Button>
      </FlexContainer>
      <SmallTitleSpan>이름</SmallTitleSpan>
      <Input inputName="name" margin="12px 0 20px 0" placeholder={name} />

      <SmallTitleSpan>휴대폰</SmallTitleSpan>
      <Input inputName="phone" margin="12px 0 20px 0" placeholder={phone} />

      <SmallTitleSpan>이메일</SmallTitleSpan>
      <Input inputName="email" placeholder={email} />
      <Button btnType="block-positive" width="320px" margin="20px 0px 50px 0px">
        저장하기
      </Button>
    </Form>
  );
};
export default MyPageForm;
