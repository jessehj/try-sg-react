import React from "react";
import BoardFooter from "./index";
import exampleImg from "../../../assets/image/exampleUser.svg";

export default {
  component: BoardFooter,
  title: "BoardFooter",
};

export const defaultBoardFooter = () => {
  return (
    <BoardFooter isOwner={false} userProfileImg={exampleImg} userName="민기" />
  );
};
defaultBoardFooter.story = {
  name: "BoardFooter",
};
export const loginBoardFooter = () => {
  return (
    <BoardFooter isOwner userProfileImg={exampleImg} userName="로그인민기" />
  );
};
loginBoardFooter.story = {
  name: "LoginBoardFooter",
};
