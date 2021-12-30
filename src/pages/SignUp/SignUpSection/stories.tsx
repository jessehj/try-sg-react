import React from "react";

import SignUpSection from "./index";

export default {
  component: SignUpSection,
  title: "SignupSection",
};

export const defaultSignUpSection = () => {
  return <SignUpSection />;
};

defaultSignUpSection.story = {
  name: "SignUpSection",
};
