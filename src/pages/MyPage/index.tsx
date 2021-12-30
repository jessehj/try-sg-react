import React from "react";
import FlexContainer from "../../style/FlexContainer";
import MyPageForm from "./MyPageForm";
import Section from "../../components/Section";

const MyPage: React.FC = function MyPage() {
  return (
    <Section top="170px">
      <FlexContainer direction="row" alignItems="center" padding="10px">
        <MyPageForm />
      </FlexContainer>
    </Section>
  );
};

export default MyPage;
