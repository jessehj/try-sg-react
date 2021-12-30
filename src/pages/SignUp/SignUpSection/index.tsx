import React from "react";
import FlexContainer from "../../../style/FlexContainer";
import SignUpForm from "../SignUpForm";

const SignUpSection: React.FC = function SignUpSection() {
  return (
    <FlexContainer
      direction="column"
      alignItems="center"
      width="50%"
      height="fit-content"
    >
      <SignUpForm />
    </FlexContainer>
  );
};
export default SignUpSection;
