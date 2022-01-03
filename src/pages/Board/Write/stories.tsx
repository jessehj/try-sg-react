import React from "react";
import Write from "./index";

export default {
  component: Write,
  title: "Write",
};
export const defaultWrite = () => {
  return <Write />;
};
defaultWrite.story = {
  name: "Write",
};
