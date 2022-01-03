import React from "react";
import IconButton from "./index";
import IconButtonProps from "./_interface";
import exampleIcon from "../../assets/icon/Rewrite.svg";

export default {
  component: IconButton,
  title: "IconButton",
};
const defaultProps: IconButtonProps = {
  src: exampleIcon,
};
const bigProps: IconButtonProps = {
  src: exampleIcon,
  width: "30px",
  height: "30px",
};
export const defaultIconButton = () => {
  return <IconButton src={defaultProps.src} />;
};
defaultIconButton.story = {
  name: "defaultIconButton",
};
export const bigIconButton = () => {
  return (
    <IconButton
      src={bigProps.src}
      height={bigProps.height}
      width={bigProps.width}
    />
  );
};
bigIconButton.story = {
  name: "bigIconButton",
};
