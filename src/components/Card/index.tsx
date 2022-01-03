import React from "react";
import styled from "styled-components";
import style from "./style";
import { ReactComponent as CreateImage } from "../../assets/images/create.svg";
import { ReactComponent as DeleteImage } from "../../assets/images/delete.svg";
import * as Types from "../types/index";

const CreateImageStyle = styled(CreateImage)`
  &:hover {
    cursor: pointer;
  }
`;
const DeleteImageStyle = styled(DeleteImage)`
  &:hover {
    cursor: pointer;
  }
`;

const Card = function ({ userId, key, title, body }: Types.CardProps) {
  return (
    <style.CardContainer>
      <style.ImageArea>사진</style.ImageArea>
      <style.ContentWrap>
        <style.TextArea>
          <style.CardTitle>
            {title}
            {userId}
            {key}
          </style.CardTitle>
          <style.CardText>{body}</style.CardText>
        </style.TextArea>
        <style.IconArea>
          <div>아이콘</div>
          <style.FunctionBox>
            <CreateImageStyle
              onClick={() => {
                console.log("hello");
              }}
            />
            <DeleteImageStyle
              onClick={() => {
                console.log("hi");
              }}
            />
          </style.FunctionBox>
        </style.IconArea>
      </style.ContentWrap>
    </style.CardContainer>
  );
};

export default Card;
