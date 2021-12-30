import React from "react";
import MyPageForm from "./index";

export default {
  component: MyPageForm,
  title: "MyPageForm",
};
export const defaultMyPageForm = () => {
  return <MyPageForm />;
};
defaultMyPageForm.story = {
  name: "MyPageForm",
};
