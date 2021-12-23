import React from "react";
import { ReactComponent as Slonch } from "../../assets/slonch.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu_Icon.svg";
import * as S from "./style";

const MainHeader = function MainHeader() {
  return (
    <S.HeaderContainer>
      <Slonch style={{ margin: "16px" }} />
      <MenuIcon style={{ margin: "16px", cursor: "pointer" }} />
    </S.HeaderContainer>
  );
};

export default MainHeader;
