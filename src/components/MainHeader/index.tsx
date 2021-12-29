import React, { useState } from "react";
import * as S from "./style";
import MyProfileModal from "../Modals/MyProfileModal";

interface Props {
  toggle: boolean;
  handleMenuToggle: (status: boolean) => void;
}

const MainHeader: React.FC<Props> = function MainHeader({
  toggle,
  handleMenuToggle,
}) {
  const [modal, handleModal] = useState<boolean>(false);

  return (
    <S.HeaderContainer>
      <S.LeftContainer>
        <S.SlonchIcon />
        <S.NavigationBarContainer>
          <S.NavigationList>홈 피드</S.NavigationList>
          <S.NavigationList>카테고리</S.NavigationList>
          <S.NavigationList>디렉토리</S.NavigationList>
        </S.NavigationBarContainer>
      </S.LeftContainer>
      <S.RightContainer>
        <S.UserImgIcon onClick={() => handleModal(true)}>
          {modal && (
            <S.ModalContainer>
              <MyProfileModal handleModal={handleModal} />
            </S.ModalContainer>
          )}
        </S.UserImgIcon>
        <S.MenuIcon toggle={toggle} onClick={() => handleMenuToggle(!toggle)} />
      </S.RightContainer>
    </S.HeaderContainer>
  );
};

export default MainHeader;
