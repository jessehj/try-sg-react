import styled from "styled-components";
import Theme from "../../constants/theme";
import { ReactComponent as Logo } from "../../assets/images/SLONCH.svg";
import MobileMenu from "../../assets/images/Mobile-menu.svg";
import UserImage from "../../assets/images/user_image.svg";
import CancleIcon from "../../assets/images/cancle.svg";

const TopWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0px;
  z-index: 2000;
  box-sizing: border-box;
  background-color: ${Theme.Colors.WHITE};
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
  @media ${Theme.DeviceSize.PHONE} {
    padding: 0 24px 0 16px;
    height: 60px;
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    padding: 0 60px 0 48px;
    height: 80px;
  }
`;
const LeftBox = styled.div`
  display: flex;
  align-items: center;
`;
const LogoStyle = styled(Logo)`
  @media ${Theme.DeviceSize.PHONE} {
    width: 81px;
    height: 15px;
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    width: 135px;
    height: 25px;
  }
`;
const RightMenu = styled.div<{ toggle: boolean }>`
  @media ${Theme.DeviceSize.PHONE} {
    width: 24px;
    height: 24px;
    background-image: ${(props) =>
      props.toggle ? `url(${CancleIcon})` : `url(${MobileMenu})`};
    transition: 0.2s linear;
  
  @media ${Theme.DeviceSize.DESKTOP} {
    width: 48px;
    height: 48px;
    background-image: url(${UserImage});
    background-position: 50% 50%;
    background-size: cover;
  }
`;
const NavStyle = styled.nav`
  margin-left: 37px;
  @media ${Theme.DeviceSize.PHONE} {
    display: none;
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    display: block;
  }
`;
const MenuBox = styled.ul`
  display: flex;
`;
const MenuItem = styled.li`
  &:nth-child(2) {
    margin: 0 24px;
  }
`;
const ToggleMenu = styled.div<{ toggle: boolean }>`
  display: ${(props) => (props.toggle ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 60px;
  z-index: 1000;
  box-sizing: border-box;
  padding: 24px 0 16px 0;
  background-color: ${Theme.Colors.WHITE};
`;
const ToggleInfoImage = styled.div`
  width: 80px;
  height: 80px;
  background-image: url(${UserImage});
  background-repeat: no-repeat;
  background-size: cover;
`;
const ToggleInfoName = styled.h5`
  margin: 8px 0;
  font-family: ${Theme.Fonts.FONT_ONE.name};
  font-size: ${Theme.Fonts.FONT_ONE.HEADING_FIVE.fontSize};
  font-weight: ${Theme.Fonts.FONT_ONE.HEADING_FIVE.fontWeight};
  line-height: ${Theme.Fonts.FONT_ONE.HEADING_FIVE.lineHeight};
`;
const ToggleWriteBox = styled.div`
  flex: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 30px;
  border-radius: 50px;
  font-family: ${Theme.Fonts.FONT_ONE.name};
  font-size: ${Theme.Fonts.FONT_ONE.BUTTON_THREE.fontSize};
  font-weight: ${Theme.Fonts.FONT_ONE.BUTTON_THREE.fontWeight};
  //line-height: ${Theme.Fonts.FONT_ONE.BUTTON_THREE.lineHeight};
  border: 1px solid ${Theme.Colors.PRIMARY_COLOR};
`;
const ToggleMenuWrap = styled.div`
  width: 100%;
  margin: 24px 0 16px 0;
  padding: 32px 0;
  box-sizing: border-box;
  border-top: 1px solid ${Theme.Colors.GRAY_TWO};
  border-bottom: 1px solid ${Theme.Colors.GRAY_TWO};
`;
const ToggleUlStyle = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ToggleListStyle = styled.li`
  font-family: ${Theme.Fonts.FONT_ONE.name};
  font-size: ${Theme.Fonts.FONT_ONE.HEADING_FOUR.fontSize};
  font-weight: ${Theme.Fonts.FONT_ONE.HEADING_FOUR.fontWeight};
  line-height: ${Theme.Fonts.FONT_ONE.HEADING_FOUR.lineHeight};
  & + & {
    margin-top: 12px;
  }
`;
const ToggleLogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 69px;
  height: 30px;
  box-sizing: border-box;
  border: 1px solid ${Theme.Colors.GRAY_FOUR};
  border-radius: 100px;
  outline: 0px;
  background-color: ${Theme.Colors.WHITE};
  color: ${Theme.Colors.GRAY_FOUR};
  font-family: ${Theme.Fonts.FONT_ONE.name};
  font-size: ${Theme.Fonts.FONT_ONE.BUTTON_THREE.fontSize};
  font-weight: ${Theme.Fonts.FONT_ONE.BUTTON_THREE.fontWeight};
  line-height: ${Theme.Fonts.FONT_ONE.BUTTON_THREE.lineHeight};
`;
export default {
  TopWrap,
  LogoStyle,
  NavStyle,
  MenuBox,
  MenuItem,
  LeftBox,
  RightMenu,
  ToggleMenu,
  ToggleInfoImage,
  ToggleInfoName,
  ToggleWriteBox,
  ToggleMenuWrap,
  ToggleListStyle,
  ToggleUlStyle,
  ToggleLogoutButton,
};
