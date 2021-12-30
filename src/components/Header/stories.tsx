import React from "react";
import Header from "./index";

export default {
  component: Header,
  title: "Header",
};

export const defaultHeader = () => {
  return <Header />;
};

defaultHeader.story = {
  name: "Default",
};
