import React from "react";
import SignUp from "./index";
import Header from "../../components/Header";

export default {
  component: SignUp,
  title: "SignUp",
};

export const defaultSignUp = () => {
  return (
    <>
      <Header />
      <SignUp />
    </>
  );
};
defaultSignUp.story = {
  name: "SignUp Page",
};
