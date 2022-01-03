import React from "react";
import FlexContainer from "../../../style/FlexContainer";
import Tag from "../Tag";

interface TagsInterface {
  tags?: string[];
}

const BoardTags: React.FC<TagsInterface> = function BoardTags({ tags }) {
  return (
    <FlexContainer
      height="fit-content"
      alignItems="flex-start"
      justifyContent="flex-start"
      margin="30px 0px 0px 0px"
    >
      {tags
        ? tags.map((tag) => {
            return <Tag>{tag}</Tag>;
          })
        : null}
    </FlexContainer>
  );
};

export default BoardTags;
