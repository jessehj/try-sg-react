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
      src={exampleImage}
      title="커머스에서 장바구니를 구성하는 방법들"
      explain="설명입니다. 로그인 성공함.테스트용설명입니다.테스트용설명입니다.테스트용 설명입니다."
      tags={["화이팅", "서비스 기획"]}
    />
  );
};
defaultBoardCard.story = {
  name: "defaultBoardCard",
};
export const loginBoardCard = () => {
  return (
    <BoardCard
      src={exampleImage}
      title="커머스에서 장바구니를 구성하는 방법"
      explain="설명입니다. 로그인 성공함.테스트용설명입니다.테스트용설명입니다.테스트용 설명입니다."
      tags={[]}
      owner="hu"
    />
  );
};
loginBoardCard.story = {
  name: "loginBoardCard",
};
