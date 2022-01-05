import React from "react";
import styled from "styled-components";
import StyledBoardFooter from "./style";
import BoardFooterProps from "./interface";
import CircleImage from "../../CircleImage";
import Span from "../../Span";
import FlexContainer from "../../../style/FlexContainer";
import FlexItem from "../../../style/FlexItem";
import IconButton from "../../IconButton";
import RewriteIcon from "../../../assets/icon/Rewrite.svg";
import DeleteIcon from "../../../assets/icon/Delete.svg";
import {
  FROM_TABLET_TO_PHONE,
  MediaQueries,
} from "../../../style/MediaQueries";

const BoardFooter: React.FC<BoardFooterProps> = function BoardFooter({
  isOwner,
  userProfileImg,
  userName,
  onDelete,
  onReWrite,
}) {
  return isOwner === true ? (
    <StyledBoardFooter>
      <StyledCardFooter
        width="100%"
        height="50px"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <FlexItem flexGrow="none" flexShrink="none">
          <StyledCardFooter
            height="50px"
            margin="0 0 0 24px"
            flex="none"
            direction="row"
          >
            <FlexItem flexBasis="50px">
              <CircleImage
                src={userProfileImg}
                height="28px"
                width="28px"
                margin="24px 0px"
              />
            </FlexItem>
            <Span
              fontWeight="400"
              fontSize="12px"
              lineHeight="18px"
              margin="16px 0px"
              width="unset"
            >
              {userName}
            </Span>
          </StyledCardFooter>
        </FlexItem>
        <FlexItem>
          <StyledCardFooter
            direction="column"
            height="50px"
            margin="0 24px 0 auto"
            flex="none"
            justifyContent="flex-end"
          >
            <FlexItem flexBasis="50px">
              <IconButton
                margin="13px 0px"
                src={RewriteIcon}
                onClick={onReWrite}
              />
            </FlexItem>
            <FlexItem flexBasis="50px">
              <IconButton src={DeleteIcon} onClick={onDelete} />
            </FlexItem>
          </StyledCardFooter>
        </FlexItem>
      </StyledCardFooter>
    </StyledBoardFooter>
  ) : (
    <StyledBoardFooter>
      <StyledCardFooter
        width="100%"
        height="50px"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <FlexItem flexGrow="none" flexShrink="none">
          <StyledCardFooter
            direction="row"
            height="50px"
            margin="0 0 0 24px"
            flex="none"
            alignItems="flex-start"
          >
            <FlexItem>
              <CircleImage
                src={userProfileImg}
                height="28px"
                width="28px"
                margin="24px 0px"
              />
            </FlexItem>
            <Span
              fontWeight="400"
              fontSize="12px"
              lineHeight="18px"
              margin="16px 0px"
              width="unset"
            >
              {userName}
            </Span>
          </StyledCardFooter>
        </FlexItem>
      </StyledCardFooter>
    </StyledBoardFooter>
  );
};

export default BoardFooter;

const StyledCardFooter = styled(FlexContainer)`
  ${MediaQueries(FROM_TABLET_TO_PHONE)} {
    background-color: #ffffff;
  }
`;
