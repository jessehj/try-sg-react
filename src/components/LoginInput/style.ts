import styled from "styled-components";
import Theme from "../../constants/theme";

export const InputWrap = styled.div`
  @media ${Theme.DeviceSize.PHONE} {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 320px;
    height: 286px;
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
    background-color: ${Theme.Colors.WHITE};
  }
`;
export const InputContainer = styled.div`
  @media ${Theme.DeviceSize.PHONE} {
    width: 320px;
    height: 286px;
  }
`;
export const InputButton = styled.button`
  @media ${Theme.DeviceSize.PHONE} {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 64px;
    background: #397ef6;
    border-radius: 8px;
    color: ${Theme.Colors.WHITE};
    outline: 0px;
    border: 0px;
    &:hover {
      cursor: pointer;
    }
  }
  @media ${Theme.DeviceSize.DESKTOP} {
  }
`;
export const InputHeader = styled.h3`
  @media ${Theme.DeviceSize.PHONE} {
    font-size: ${Theme.Fonts.FONT_ONE.HEADING_THREE.fontSize};
    font-weight: ${Theme.Fonts.FONT_ONE.HEADING_THREE.fontWeight};
    line-height: ${Theme.Fonts.FONT_ONE.HEADING_THREE.lineHeight};
    margin-bottom: 12px;
  }
  @media ${Theme.DeviceSize.DESKTOP} {
  }
`;
export const InputInner = styled.div`
  @media ${Theme.DeviceSize.PHONE} {
    height: 122px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  @media ${Theme.DeviceSize.DESKTOP} {
  }
`;
export const InputUser = styled.div<{ toggle: boolean }>`
  @media ${Theme.DeviceSize.PHONE} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 56px;
    padding: 16px 20px 16px 0px;
    border: 2px solid ${(props) =>
      props.toggle ? Theme.Colors.HOVER_COLOR : Theme.Colors.GRAY_TWO};
    box-sizing: border-box;
    border-radius: 8px;
    background-color: ${Theme.Colors.WHITE};
    overflow: hidden;
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 56px;
    padding: 16px 20px 16px 0px;
    border: 2px solid ${(props) =>
      props.toggle ? Theme.Colors.HOVER_COLOR : Theme.Colors.GRAY_TWO};
    box-sizing: border-box;
    border-radius: 8px;
    background-color: ${Theme.Colors.WHITE};
    overflow: hidden;
  }
  Theme.Colors.HOVER_COLOR
`;

export const InputStyle = styled.input`
  @media ${Theme.DeviceSize.PHONE} {
    width: 80%;
    height: 50px;
    outline: 0px;
    border: 0px;
    padding-left: 16px;
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    width: 80%;
    height: 50px;
    outline: 0px;
    border: 0px;
    padding-left: 16px;
  }
`;
export const ChooseBoxWrap = styled.nav`
  margin-top: 12px;
`;
export const ChooseBoxInner = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: ${Theme.Fonts.FONT_ONE.BODY_TWO.fontSize};
  font-weight: ${Theme.Fonts.FONT_ONE.BODY_TWO.fontWeight};
  line-height: ${Theme.Fonts.FONT_ONE.BODY_TWO.lineHeight};
`;
export const SpaceStick = styled.li`
  color: ${Theme.Colors.GRAY_THREE};
`;
export default {
  InputWrap,
  InputContainer,
  InputButton,
  InputHeader,
  InputInner,
  InputUser,
  InputStyle,
  ChooseBoxWrap,
  ChooseBoxInner,
  SpaceStick,
};
