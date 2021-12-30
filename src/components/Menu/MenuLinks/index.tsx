import React from "react";
import MenuLink from "./style";
import Logo from "../../Logo";

const MenuLinks: React.FC = function MenuLinks() {
  return (
    <>
      <Logo />
      <MenuLink>홈 피드</MenuLink>
      <MenuLink>카테고리</MenuLink>
      <MenuLink>디렉토리</MenuLink>
    </>
  );
};

export default MenuLinks;
