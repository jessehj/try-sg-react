import React from "react";
import ImageSection from "../../components/ImageSection";
import FlexContainer from "../../style/FlexContainer";
import WelcomeSection from "./WelcomeSection";
import Section from "../../components/Section";

const Welcome: React.FC = function Welcome() {
  return (
    <Section top="0px">
      <FlexContainer>
        <ImageSection />
        <WelcomeSection />
      </FlexContainer>
    </Section>
  );
};
export default Welcome;
