import React from "react";
import { useFormik } from "formik";
import commonStrings from "../../constants/strings";
import MyPageForm from "./style";
import LogoInOn from "../../assets/images/profile_large.png";

const MyPage: React.FC = () => {
  /**
   * State
   */

  const onSubmit = () => {
    console.log("submit");
  };

  const formik = useFormik({
    initialValues: {
      id: "",
      pwd: "",
    },
    onSubmit,
  });

  /**
   * Private Functions
   */

  /**
   * Event Actions
   */

  /**
   * Render Helpers
   */
  return (
    <MyPageForm.Wrapper>
      <MyPageForm.InnerWrapper>
        <MyPageForm.Title>내 정보</MyPageForm.Title>
        <MyPageForm.LoginWrapper>
          <MyPageForm.SubTitle>로그인 정보</MyPageForm.SubTitle>
          <MyPageForm.FormWrapper>
            <MyPageForm.Label>아이디</MyPageForm.Label>
            <MyPageForm.Input
              type="text"
              valueId="id"
              value={formik.values.id}
              disabled
            />
            <MyPageForm.Label>비밀번호</MyPageForm.Label>
            <MyPageForm.FormInputBtn
              type="text"
              valueId="pwd"
              value={formik.values.pwd}
              disabled
              btnValue={commonStrings.BUTTON_PASSWORD}
              onClick={() => console.log("비밀번호 변경")}
            />
          </MyPageForm.FormWrapper>
        </MyPageForm.LoginWrapper>
        <MyPageForm.InfoWrapper>
          <MyPageForm.SubTitle>회원 정보</MyPageForm.SubTitle>
          <MyPageForm.InfoBtnWrapper>
            <MyPageForm.InfoImg src={LogoInOn} alt="로그인된 이미지" />
            <MyPageForm.InfoBtn>Upload picture</MyPageForm.InfoBtn>
            <MyPageForm.InfoBtn>Delete</MyPageForm.InfoBtn>
          </MyPageForm.InfoBtnWrapper>
          <MyPageForm.FormWrapper>
            <MyPageForm.Label>이름</MyPageForm.Label>
            <MyPageForm.Input
              type="text"
              valueId="id"
              value={formik.values.id}
              disabled
            />
            <MyPageForm.Label>휴대폰</MyPageForm.Label>
            <MyPageForm.Input
              type="text"
              valueId="id"
              value={formik.values.id}
              disabled
            />
            <MyPageForm.Label>이메일</MyPageForm.Label>
            <MyPageForm.Input
              type="text"
              valueId="id"
              value={formik.values.id}
            />
            <MyPageForm.InfoSubmit type="submit">
              저장하기
            </MyPageForm.InfoSubmit>
          </MyPageForm.FormWrapper>
        </MyPageForm.InfoWrapper>
      </MyPageForm.InnerWrapper>
    </MyPageForm.Wrapper>
  );
};

MyPage.defaultProps = {};
export default MyPage;
