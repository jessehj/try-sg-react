import React from "react";
import BoardCard from "./index";
import exampleImage from "../../assets/image/tnExample1.svg";

export default {
  component: BoardCard,
  title: "BoardCard",
};

export const defaultBoardCard = () => {
  return (
    <BoardCard
      isOwner={false}
      src={exampleImage}
      title="타이틀입니다."
      explain="설명입니다."
    />
  );
};
defaultBoardCard.story = {
  name: "defaultBoardCard",
};
export const loginBoardCard = () => {
  return (
    <BoardCard
      isOwner
      src={exampleImage}
      title="로그인 성공시 카드입니다."
      explain="설명입니ㄷ,. 로그인 성공함"
    />
  );
};
loginBoardCard.story = {
  name: "lobinBoardCard",
};
