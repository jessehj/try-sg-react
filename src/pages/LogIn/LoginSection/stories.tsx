import React from "react";
import LoginSection from "./index";

export default {
  component: LoginSection,
  title: "LoginSection",
};

export const defaultLoginSection = () => {
  return <LoginSection />;
};

defaultLoginSection.story = {
  name: "DefaultLoginSection",
};
