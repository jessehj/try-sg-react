import React, { useState } from "react";
import style from "./style";
import { ReactComponent as Pencil } from "../../assets/images/pencil.svg";

const FixMenu = function () {
  const [isClick, setIsClick] = useState<boolean>(false);
  return (
    <>
      <style.ToggleMenu toggle={isClick}>
        <style.ToggleInfoImage
          style={{ width: "80px", height: "80px", flex: "none" }}
        />
        <style.ToggleInfoName>유저 이름</style.ToggleInfoName>
        <style.ToggleWriteBox>
          <Pencil />
          <div>글쓰기</div>
        </style.ToggleWriteBox>
        <style.ToggleMenuWrap>
          <nav>
            <style.ToggleUlStyle>
              <style.ToggleListStyle>홈 피드</style.ToggleListStyle>
              <style.ToggleListStyle>카테고리</style.ToggleListStyle>
              <style.ToggleListStyle>디렉토리</style.ToggleListStyle>
              <style.ToggleListStyle>내 정보</style.ToggleListStyle>
            </style.ToggleUlStyle>
          </nav>
        </style.ToggleMenuWrap>
        <style.ToggleLogoutButton type="button">
          로그아웃
        </style.ToggleLogoutButton>
      </style.ToggleMenu>
      <style.TopWrap>
        <style.LeftBox>
          <style.LogoStyle />
          <style.NavStyle>
            <style.MenuBox>
              <style.MenuItem>홈 피드</style.MenuItem>
              <style.MenuItem>카테고리</style.MenuItem>
              <style.MenuItem>디렉토리</style.MenuItem>
            </style.MenuBox>
          </style.NavStyle>
        </style.LeftBox>
        <style.RightMenu
          onClick={() => {
            setIsClick(!isClick);
          }}
          toggle={isClick}
        />
      </style.TopWrap>
    </>
  );
};

export default FixMenu;
