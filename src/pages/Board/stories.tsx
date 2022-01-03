import React from "react";
import Board from "./index";

export default {
  component: Board,
  title: "Board",
};
export const defaultBoard = () => {
  return <Board />;
};
defaultBoard.story = {
  name: "BoardPage",
};
