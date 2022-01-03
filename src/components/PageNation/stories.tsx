import React from "react";
import PageNation from "./index";

export default {
  component: PageNation,
  title: "PageNation",
};
export const defaultPageNation = () => {
  return <PageNation />;
};
defaultPageNation.story = {
  name: "default",
};
