import React from "react";
import Login from "./index";
import Header from "../../components/Header";

export default {
  component: Login,
  title: "LogIn",
};

export const defaultLoginPage = () => {
  return (
    <>
      <Header />
      <Login />
    </>
  );
};

defaultLoginPage.story = {
  name: "LogIn Page",
};
