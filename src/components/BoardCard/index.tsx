import React from "react";
import StyledBoardCard from "./style";
import BoardCardProps from "./interface";
import BoardTitle from "./BoardTitle";
import BoardExplain from "./BoardExplain";
import ThumbnailImage from "./ThumbnailImage";
import Hr from "../Hr";

import BoardFooter from "./BoardFooter";
import exampleImage from "../../assets/image/exampleUser.svg";

const BoardCard: React.FC<BoardCardProps> = function BoardCard({
  width,
  height,
  title,
  explain,
  src,
  isOwner,
}) {
  return (
    <StyledBoardCard isOwner={isOwner} src={src} width={width} height={height}>
      <ThumbnailImage src={src} />
      <BoardTitle>{title}</BoardTitle>
      <BoardExplain>{explain}</BoardExplain>
      <Hr />

      <BoardFooter
        isOwner={isOwner}
        userProfileImg={exampleImage}
        userName="민기"
      />
    </StyledBoardCard>
  );
};
export default BoardCard;
