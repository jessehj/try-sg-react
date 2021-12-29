import React, { useEffect } from "react";
import * as S from "./style";
import { ReactComponent as BiguserImg } from "../../../assets/bigUserImg.svg";
import { ReactComponent as CreateIcon } from "../../../assets/create_Icon.svg";

interface Props {
  toggle: boolean;
}

const MenuModal: React.FC<Props> = function ({ toggle }) {
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    }
  }, []);

  return (
    <S.AbsoluteContainer>
      <S.MenuModalContainer toggle={toggle}>
        <S.UserContainer>
          <BiguserImg />
          <S.UserName>이나</S.UserName>
          <S.WriteBtn>
            <CreateIcon />
            글쓰기
          </S.WriteBtn>
        </S.UserContainer>
        <S.MenuContainer>
          <S.MenuList>홈 피드</S.MenuList>
          <S.MenuList>카테고리</S.MenuList>
          <S.MenuList>디렉토리</S.MenuList>
          <S.MenuList>내 정보</S.MenuList>
        </S.MenuContainer>
        <S.Footer>
          <S.FooterBtn>로그아웃</S.FooterBtn>
        </S.Footer>
      </S.MenuModalContainer>
    </S.AbsoluteContainer>
  );
};

export default MenuModal;
