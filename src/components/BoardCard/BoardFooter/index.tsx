import React from "react";
import StyledBoardFooter from "./style";
import BoardFooterProps from "./interface";
import CircleImage from "../../CircleImage";
import Span from "../../Span";
import FlexContainer from "../../../style/FlexContainer";
import FlexItem from "../../../style/FlexItem";

const BoardFooter: React.FC<BoardFooterProps> = function BoardFooter({
  isLogin,
  userProfileImg,
  userName,
}) {
  return isLogin === true ? (
    <StyledBoardFooter>
      <FlexContainer
        width="fit-content"
        direction="row"
        height="50px"
        justifyContent="flex-start"
      >
        <CircleImage src={userProfileImg} />
        <Span fontWeight="400" fontSize="12px" lineHeight="18px">
          {userName}
        </Span>
      </FlexContainer>
    </StyledBoardFooter>
  ) : (
    <StyledBoardFooter>
      <FlexContainer
        width="fit-content"
        height="50px"
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <FlexItem flexGrow="none" flexShrink="none">
          <CircleImage
            src={userProfileImg}
            height="28px"
            width="28px"
            margin="24px 12px"
          />
        </FlexItem>
        <FlexItem flexGrow="none" flexShrink="none">
          <Span
            fontWeight="400"
            fontSize="12px"
            lineHeight="18px"
            margin="16px 0px"
          >
            {userName}
          </Span>
        </FlexItem>
      </FlexContainer>
    </StyledBoardFooter>
  );
};

export default BoardFooter;
