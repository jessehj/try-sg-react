import React, { useState } from "react";
import { useLocation } from "react-router";
import Menu from "../Menu";
import LoginInfo from "../LoginInfo";
import Logo from "../Logo";
import HeaderLayout, { MobileHeaderLayout } from "./styles";
import IconButton from "../IconButton";
import MobileMenuIcon from "../../assets/icon/MobileMenu.svg";
import XIcon from "../../assets/icon/Xicon.svg";
import { handleClick } from "../../handlers";
import MobileMenu from "./MobileMenu";
import exImg from "../../assets/image/exampleUser.svg";

const Header: React.FC = function Header() {
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();
  const handleOpen = (e: React.MouseEvent) => {
    handleClick(e, () => setOpen(!isOpen));
  };

  return (
    <>
      <HeaderLayout>
        <Menu />
        <LoginInfo isLogin={false} />
      </HeaderLayout>
      {location.pathname.startsWith("/board") ? (
        <MobileHeaderLayout>
          <Logo height="15px" />
          {isOpen === false ? (
            <IconButton
              src={MobileMenuIcon}
              width="24px"
              height="24px"
              onClick={handleOpen}
            />
          ) : (
            <IconButton
              src={XIcon}
              width="24px"
              height="24px"
              onClick={handleOpen}
            />
          )}

          <MobileMenu isOpen={isOpen} profileImage={exImg} userName="민기" />
        </MobileHeaderLayout>
      ) : null}
    </>
  );
};

export default Header;
