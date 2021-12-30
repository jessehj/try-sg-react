import React from "react";
import BoardCard from "./index";
import exampleImage from "../../assets/image/tnExample1.svg";

export default {
  component: BoardCard,
  title: "BoardCard",
};

export const defaultBoardCard = () => {
  return (
    <BoardCard src={exampleImage} title="타이틀입니다." explain="설명입니다." />
  );
};
defaultBoardCard.story = {
  name: "defaultBoardCard",
};
