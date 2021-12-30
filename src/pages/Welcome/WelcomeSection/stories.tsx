import React from "react";
import WelcomeSection from "./index";

export default {
  component: WelcomeSection,
  title: "WelcomeSection",
};

export const defaultWelcomeSection = () => {
  return <WelcomeSection />;
};
defaultWelcomeSection.story = {
  name: "WelcomeSection",
};
