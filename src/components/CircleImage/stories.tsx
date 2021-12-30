import React from "react";
import CircleImage from "./index";
import exampleImage from "../../assets/image/exampleUser.svg";

export default {
  component: CircleImage,
  title: "CircleImage",
};

export const defaultCircleImage = () => {
  return <CircleImage src={exampleImage} />;
};

defaultCircleImage.story = {
  name: "CircleImage",
};
