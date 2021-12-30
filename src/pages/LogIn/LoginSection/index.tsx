import React from "react";
import FlexContainer, {
  FlexContainerProps,
} from "../../../style/FlexContainer";
import LoginForm from "../LoginForm";

const FlexProp: FlexContainerProps = {
  width: "50%",
  direction: "column",
};

const LoginSection: React.FC = function LoginSection() {
  return (
    <FlexContainer
      width={FlexProp.width}
      direction={FlexProp.direction}
      alignItems="center"
      height="fit-content"
    >
      <LoginForm />
    </FlexContainer>
  );
};
export default LoginSection;
