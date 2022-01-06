import React, { useState } from "react";
import { HeaderList, HeaderLoginBtn } from "./style";
import Logo from "../../../assets/svgs/logo.svg";
import LogoInOn from "../../../assets/images/profile_large.png";
import LogoInOff from "../../../assets/images/login_btn.png";
import commonStrings from "../../../constants/strings";

const Header: React.FC = () => {
  /**
   * State
   */
  const [isLogin] = useState<boolean>(false);

  /**
   * Private Functions
   */
  /**
   * Event Actions
   */

  /**
   * Render Helpers
   */
  return (
    <HeaderList>
      <img src={Logo} alt="Logo 이미지" />
      <button type="button" className="header__menus">
        {commonStrings.MENUS_HOME}
      </button>
      <button type="button" className="header__menus">
        {commonStrings.MENUS_CATEGORY}
      </button>
      <button type="button" className="header__menus">
        {commonStrings.MENUS_DERECTORY}
      </button>

      {!isLogin ? (
        <HeaderLoginBtn type="button" to="/login" login={isLogin}>
          <img
            className="header__login--btn"
            src={LogoInOff}
            alt="로그인 아이콘"
          />
          <span>로그인/회원가입</span>
        </HeaderLoginBtn>
      ) : (
        <HeaderLoginBtn type="button" to="/signUp" login={isLogin}>
          <img src={LogoInOn} alt="로그인된 아이콘" />
        </HeaderLoginBtn>
      )}
    </HeaderList>
  );
};

Header.defaultProps = {};
export default Header;
