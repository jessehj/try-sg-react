import React from "react";
import StyledBoardFooter from "./style";
import BoardFooterProps from "./interface";
import CircleImage from "../../CircleImage";
import Span from "../../Span";
import FlexContainer from "../../../style/FlexContainer";
import FlexItem from "../../../style/FlexItem";
import IconButton from "../../IconButton";
import RewriteIcon from "../../../assets/icon/Rewrite.svg";
import DeleteIcon from "../../../assets/icon/Delete.svg";

const BoardFooter: React.FC<BoardFooterProps> = function BoardFooter({
  isOwner,
  userProfileImg,
  userName,
}) {
  return isOwner === true ? (
    <StyledBoardFooter>
      <FlexContainer
        width="100%"
        height="50px"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <FlexItem flexGrow="none" flexShrink="none">
          <FlexContainer height="50px" margin="0 0 0 auto" flex="none">
            <FlexItem flexBasis="50px">
              <CircleImage
                src={userProfileImg}
                height="28px"
                width="28px"
                margin="24px 12px"
              />
            </FlexItem>
            <Span
              fontWeight="400"
              fontSize="12px"
              lineHeight="18px"
              margin="16px 0px"
            >
              {userName}
            </Span>
          </FlexContainer>
        </FlexItem>
        <FlexItem>
          <FlexContainer height="50px" margin="0 0 0 auto" flex="none">
            <FlexItem flexBasis="50px">
              <IconButton margin="13px 0px" src={RewriteIcon} />
            </FlexItem>
            <FlexItem flexBasis="50px">
              <IconButton src={DeleteIcon} />
            </FlexItem>
          </FlexContainer>
        </FlexItem>
      </FlexContainer>
    </StyledBoardFooter>
  ) : (
    <StyledBoardFooter>
      <FlexContainer
        width="100%"
        height="50px"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <FlexItem flexGrow="none" flexShrink="none">
          <FlexContainer height="50px" margin="0 0 0 auto" flex="none">
            <FlexItem flexBasis="50px">
              <CircleImage
                src={userProfileImg}
                height="28px"
                width="28px"
                margin="24px 12px"
              />
            </FlexItem>
            <Span
              fontWeight="400"
              fontSize="12px"
              lineHeight="18px"
              margin="16px 0px"
            >
              {userName}
            </Span>
          </FlexContainer>
        </FlexItem>
      </FlexContainer>
    </StyledBoardFooter>
  );
};

export default BoardFooter;
