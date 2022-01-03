import React from "react";
import ImageSection from "../../components/ImageSection";
import LoginSection from "./LoginSection";
import FlexContainer, { FlexContainerProps } from "../../style/FlexContainer";
import Section from "../../components/Section";

const Props: FlexContainerProps = {
  direction: "row",
};

const LogIn: React.FC = function LogIn() {
  return (
    <Section top="0px">
      <FlexContainer direction={Props.direction}>
        <ImageSection />
        <LoginSection />
      </FlexContainer>
    </Section>
  );
};
export default LogIn;
