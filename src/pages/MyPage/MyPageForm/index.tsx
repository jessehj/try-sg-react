import React from "react";
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

const MyPageForm: React.FC = function MyPageForm() {
  return (
    <Form width="320px" height="fit-content">
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
      <Input inputName="아이디" />
      <SmallTitleSpan>비밀번호</SmallTitleSpan>
      <FlexContainer
        width="320px"
        direction="row"
        height="fit-content "
        margin="20px 0"
      >
        <Input inputName="비밀번호" width="180px" margin="0 8px 0px 0px" />
        <Button btnType="block-positive" width="fit-content" margin="0 0 0 0">
          비밀번호 변경
        </Button>
      </FlexContainer>
      <Hr />
      <TitleSpan>회원 정보</TitleSpan>
      <FlexContainer direction="row" height="fit-content" margin="20px 0">
        <CircleImage src={exampleImg} margin="0px 20px 0 0" />
        <Button
          btnType="basic-positive"
          width="fit-content"
          margin="0px 0px 0 0"
        >
          Upload picture
        </Button>
        <Button btnType="basic-negative" width="fit-content">
          Delete
        </Button>
      </FlexContainer>
      <SmallTitleSpan>이름</SmallTitleSpan>
      <Input inputName="이민기" />
      <SmallTitleSpan>휴대폰</SmallTitleSpan>
      <Input inputName="010-1234-1233" />
      <SmallTitleSpan>이메일</SmallTitleSpan>
      <Input />
      <Button btnType="block-positive" width="320px" margin="20px 0px 50px 0px">
        저장하기
      </Button>
    </Form>
  );
};
export default MyPageForm;
