import React from "react";
import styled from "styled-components";
import StyledBoardCard from "./style";
import BoardCardProps from "./_interface";
import BoardTitle from "./BoardTitle";
import BoardExplain from "./BoardExplain";
import ThumbnailImage from "./ThumbnailImage";
import Hr from "../Hr";
import FlexContainer from "../../style/FlexContainer";
import FlexItem from "../../style/FlexItem";
import BoardFooter from "./BoardFooter";
import exampleImage from "../../assets/image/exampleUser.svg";
import BoardTags from "./BoardTags";
import { FROM_TABLET_TO_PHONE, MediaQueries } from "../../style/MediaQueries";

const BoardCard: React.FC<BoardCardProps> = function BoardCard({
  width,
  height,
  title,
  explain,
  src,
  owner,
  tags,
}) {
  return (
    <StyledBoardCard src={src} width={width} height={height}>
      {src ? <ThumbnailImage src={src} /> : null}
      <StyleBoardContainer
        height="fit-content"
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        margin="24px 12px"
        width="87.5%"
      >
        <FlexItem>
          <BoardTitle>{title}</BoardTitle>
        </FlexItem>
        <FlexItem>
          <BoardExplain>{explain}</BoardExplain>
        </FlexItem>
        <FlexItem>
          <BoardTags tags={tags} />
        </FlexItem>
      </StyleBoardContainer>
      <Hr />
      <BoardFooter
        isOwner={owner !== undefined}
        userProfileImg={exampleImage}
        userName={owner}
      />
    </StyledBoardCard>
  );
};
export default BoardCard;
const StyleBoardContainer = styled(FlexContainer)`
  ${MediaQueries(FROM_TABLET_TO_PHONE)} {
    background-color: #ffffff;
  }
`;
