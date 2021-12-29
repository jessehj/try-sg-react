import React from "react";
import styled from "styled-components";
import style from "./style";
import { ReactComponent as CreateImage } from "../../assets/images/create.svg";
import { ReactComponent as DeleteImage } from "../../assets/images/delete.svg";

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

const Card = function () {
  return (
    <style.CardContainer>
      <style.ImageArea>사진</style.ImageArea>
      <style.ContentWrap>
        <style.TextArea>
          <div>커머스에서 &apos;장바구니&apos;를 구성하는 방법들</div>
          <div>
            이번 글에서는 구매의 마지막 관문,장바구니에서 구매 전환율을 올리는
            방법과 각 서비스들...
          </div>
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
