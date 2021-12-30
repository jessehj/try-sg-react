import React from "react";
import Image from "../../components/ImageSection";
import LoginSection from "./LoginSection";
import FlexContainer, { FlexContainerProps } from "../../style/FlexContainer";
import Section from "../../components/Section";

const Props: FlexContainerProps = {
  direction: "row",
};

const LogIn: React.FC = function LogIn() {
  return (
    <Section top="0pxz">
      <FlexContainer direction={Props.direction}>
        <Image />
        <LoginSection />
      </FlexContainer>
    </Section>
  );
};
export default LogIn;
