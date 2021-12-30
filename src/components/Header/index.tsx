import React from "react";
import Menu from "../Menu";
import LoginInfo from "../LoginInfo";
import HeaderLayout from "./styles";

const Header: React.FC = function Header() {
  return (
    <HeaderLayout>
      <Menu />
      <LoginInfo isLogin={false} />
    </HeaderLayout>
  );
};

export default Header;
