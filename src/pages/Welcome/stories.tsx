import React from "react";
import Welcome from "./index";
import Header from "../../components/Header";

export default {
  component: Welcome,
  title: "Welcome",
};

export const defaultWelcome = () => {
  return (
    <>
      <Header />
      <Welcome />
    </>
  );
};

defaultWelcome.story = {
  name: "Welcome",
};
