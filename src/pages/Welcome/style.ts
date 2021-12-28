import styled from "styled-components";
import { Theme } from "../../constants/theme";

export const WelcomeWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  min-height: 700px;
  background-color: ${Theme.Colors.GRAY_ONE};
`;
export const WelcomeSize = styled.div`
  @media ${Theme.DeviceSize.PHONE} {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 320px;
    height: 640px;
    padding: 0px 20px 24px 20px;
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    flex-direction: row;
    width: 100%;
    max-width: 1920px;
    padding: 0px 20px 0px 20px;
  }
`;
export const WelcomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
export const WelcomeInner = styled.div`
  @media ${Theme.DeviceSize.PHONE} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 355px;
    height: 173px;
  }
`;
export const WelcomeTextBox = styled.div`
  width: 100%;
  height: 146px;
  @media ${Theme.DeviceSize.PHONE} {
    margin-top: 40px;
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    margin-top: 0px;
  }
`;
export const WelcomeTitle = styled.div`
  width: 100%;
  font-size: ${Theme.Fonts.FONT_ONE.HEADING_ONE.fontSize};
  font-weight: ${Theme.Fonts.FONT_ONE.HEADING_ONE.fontWeight};
  line-height: ${Theme.Fonts.FONT_ONE.HEADING_ONE.lineHeight};
  @media ${Theme.DeviceSize.PHONE} {
    margin-bottom: 20px;
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    margin-bottom: 14px;
  }
`;
export const WelcomeText = styled.div`
  width: 100%;
  font-size: ${Theme.Fonts.FONT_ONE.BODY_ONE.fontSize};
  font-weight: ${Theme.Fonts.FONT_ONE.BODY_ONE.fontWeight};
  line-height: ${Theme.Fonts.FONT_ONE.BODY_ONE.lineHeight};
`;
export const WelcomeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 64px;
  background-color: ${Theme.Colors.PRIMARY_COLOR};
  border: 0px;
  outline: 0px;
  border-radius: 8px;
  color: ${Theme.Colors.WHITE};
  &:active {
    background-color: ${Theme.Colors.HOVER_COLOR};
  }
`;
export default {
  WelcomeWrap,
  WelcomeSize,
  WelcomeTextBox,
  WelcomeContainer,
  WelcomeInner,
  WelcomeButton,
  WelcomeTitle,
};
