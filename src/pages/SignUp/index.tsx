import React from "react";
import ImageSection from "../../components/ImageSection";

import FlexContainer from "../../style/FlexContainer";
import SignUpSection from "./SignUpSection";
import Section from "../../components/Section";

const SignUp: React.FC = function SignUp() {
  return (
    <Section top="0px">
      <FlexContainer>
        <ImageSection />
        <SignUpSection />
      </FlexContainer>
    </Section>
  );
};

export default SignUp;
