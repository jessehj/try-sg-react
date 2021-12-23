import React from "react";
import * as S from "./style";
import { ReactComponent as UserImg } from "../../assets/userImg.svg";
import { ReactComponent as DeleteIcon } from "../../assets/delete_Icon.svg";
import { ReactComponent as EditIcon } from "../../assets/edit_Icon.svg";

const Posting = function Posting() {
  return (
    <S.PostCardContainer>
      <S.ImageContainer />
      <S.TitleContainer>
        <S.Title>
          커머스에서 &rsquo;장바구니&rsquo;를 구성하는 방법들을 알아보기
        </S.Title>
        <S.SubTitle>
          이번 글에서는 구매의 마지막 관문,장바구니에서 구매 전환율을 올리는
          방법과 각 서비스들이 어떻게 활용하고 있는지에 대해서 알아봅시다.
        </S.SubTitle>
      </S.TitleContainer>
      <S.Footer>
        <S.Profile>
          <UserImg />
          <S.ProfileName>이나</S.ProfileName>
        </S.Profile>
        <S.EditMenu>
          <EditIcon style={{ cursor: "pointer" }} />
          <DeleteIcon style={{ cursor: "pointer" }} />
        </S.EditMenu>
      </S.Footer>
    </S.PostCardContainer>
  );
};

export default Posting;
