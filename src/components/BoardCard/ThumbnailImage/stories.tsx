import React from "react";
import ThumbnailImage from "./index";
import exampleImg from "../../../assets/image/tnExample1.svg";

export default {
  component: ThumbnailImage,
  title: "ThumbnailImage",
};
export const defaultThumbnailImage = () => {
  return <ThumbnailImage src={exampleImg} />;
};

defaultThumbnailImage.story = {
  name: "ThumbnailImage",
};
