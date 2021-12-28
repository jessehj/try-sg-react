import styled from "styled-components";
import { Theme } from "../../constants/theme";
import slonchPc from "../../assets/slonch_pc.svg";
import slonchMobile from "../../assets/slonch.svg";
import menuIcon from "../../assets/menu_Icon.svg";
import userImg from "../../assets/midUserImg.svg";

export const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;

  min-width: 360px;

  background-color: white;

  @media ${Theme.DeviceSize.DESKTOP} {
    height: 80px;
  }
`;
export const LeftContainer = styled.div`
  @media ${Theme.DeviceSize.PHONE} {
    margin: 22.5px 0px 22.5px 16px;
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 398px;
    height: 50px;

    margin: 15px 0px 15px 48px;
  }
`;
export const SlonchIcon = styled.div`
  @media ${Theme.DeviceSize.PHONE} {
    width: 81px;
    height: 15px;
    background-image: url(${slonchMobile});
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    width: 135px;
    height: 25px;
    background-image: url(${slonchPc});
  }
`;
export const NavigationBarContainer = styled.div`
  @media ${Theme.DeviceSize.PHONE} {
    display: none;
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 214px;
    height: 24px;

    div:nth-child(odd) {
      color: ${Theme.Colors.PRIMARY_COLOR};
    }
  }
`;
export const NavigationList = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const RightContainer = styled.div`
  @media ${Theme.DeviceSize.PHONE} {
    margin: 18px 16px 18px 0px;
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    margin: 16px 48px 16px 0px;
  }
`;
export const UserImgIcon = styled.div`
  @media ${Theme.DeviceSize.PHONE} {
    display: none;
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    display: flex;
    width: 48px;
    height: 48px;
    background-image: url(${userImg});

    &:hover {
      cursor: pointer;
    }
  }
`;
export const MenuIcon = styled.div`
  @media ${Theme.DeviceSize.PHONE} {
    display: flex;
    width: 24px;
    height: 24px;
    background-image: url(${menuIcon});

    &:hover {
      cursor: pointer;
    }
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    display: none;
  }
`;
export const ModalContainer = styled.div`
  position: relative;
  top: 50px;
  right: 100px;

  &:hover {
    cursor: default;
  }
`;
export default {
  HeaderContainer,
  LeftContainer,
  SlonchIcon,
  NavigationBarContainer,
  NavigationList,
  RightContainer,
  MenuIcon,
  UserImgIcon,
  ModalContainer,
};
