import React from "react";
import Menu from "./index";

export default {
  component: Menu,
  title: "Menu",
};
export const defaultMenu = () => {
  return <Menu />;
};
defaultMenu.story = {
  name: "Default",
};
