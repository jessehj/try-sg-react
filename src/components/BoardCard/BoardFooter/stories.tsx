import React from "react";
import BoardFooter from "./index";
import exampleImg from "../../../assets/image/exampleUser.svg";

export default {
  component: BoardFooter,
  title: "BoardFooter",
};

export const defaultBoardFooter = () => {
  return (
    <BoardFooter isLogin={false} userProfileImg={exampleImg} userName="민기" />
  );
};
defaultBoardFooter.story = {
  name: "BoardFooter",
};
