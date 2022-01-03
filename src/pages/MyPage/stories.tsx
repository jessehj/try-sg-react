import React from "react";
import MyPage from "./index";
import Header from "../../components/Header";

export default {
  component: MyPage,
  title: "MyPage",
};

export const defaultMyPage = () => {
  return (
    <>
      <Header />
      <MyPage />
    </>
  );
};
defaultMyPage.story = {
  name: "My Page Page",
};
