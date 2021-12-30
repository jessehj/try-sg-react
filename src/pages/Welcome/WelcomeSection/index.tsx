import React from "react";
import Span from "../../../components/Span";
import Button from "../../../components/Button";
import FlexContainer from "../../../style/FlexContainer";

const WelcomeSection: React.FC = function WelcomeSection() {
  return (
    <FlexContainer direction="row" width="50%" alignItems="center">
      <FlexContainer width="355px" direction="column" alignItems="flex-start">
        <Span
          fontWeight="bold"
          fontSize="34px"
          fontStyle="normal"
          lineHeight="51px"
          textAlign="left"
        >
          Welcome to SLONCH!
        </Span>
        <Span
          fontWeight="normal"
          fontSize="16px"
          fontStyle="normal"
          lineHeight="24px"
          textAlign="left"
        >
          슬론치에 오신 것을 환영합니다.
        </Span>
        <Button btnType="block_positive" width="320px" margin="40px 0px">
          로그인
        </Button>
      </FlexContainer>
    </FlexContainer>
  );
};
export default WelcomeSection;
