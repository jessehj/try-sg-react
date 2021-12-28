import styled from "styled-components";
import { Theme } from "../../constants/theme";

export const SignInWrap = styled.div`
  @media ${Theme.DeviceSize.PHONE} {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    width: 960px;
    height: 1080px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const SignInContainer = styled.div`
  width: 320px;
  padding: 24px 20px 0px 20px;
`;
export const IdBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 320px;
  height: 56px;
  margin-top: 10px;
  border-radius: 8px;
`;
const buttonStyle = styled.button`
  border-radius: 8px;
  border: 0px;
  background-color: ${Theme.Colors.PRIMARY_COLOR};
  color: ${Theme.Colors.WHITE};
  font-size: ${Theme.Fonts.FONT_ONE.BUTTON_ONE.fontSize};
  font-weight: ${Theme.Fonts.FONT_ONE.BUTTON_ONE.fontWeight};
  line-height: ${Theme.Fonts.FONT_ONE.BUTTON_ONE.lineHeight};
  &:active {
    background-color: ${Theme.Colors.HOVER_COLOR};
  }
`;
export const CheckId = styled(buttonStyle)`
  width: 99px;
  height: 56px;
`;
export const InputStyle = styled.input`
  outline: 0px;
  border: 2px solid ${Theme.Colors.GRAY_TWO};
  box-sizing: border-box;
  margin-top: 10px;
  border-radius: 8px;
  padding-left: 20px;
  background-color: ${Theme.Colors.WHITE};
  &:focus {
    border: 2px solid ${Theme.Colors.HOVER_COLOR};
  }
`;
export const InputId = styled(InputStyle)<{ toggle: boolean }>`
  width: 213px;
  height: 56px;
  margin-top: 0px;
  border: 2px solid
    ${(props) => (props.toggle ? Theme.Colors.GRAY_TWO : Theme.Colors.DANGER)};
`;
export const InputNomal = styled(InputStyle)<{ toggle: boolean }>`
  width: 320px;
  height: 56px;
  border: 2px solid
    ${(props) => (props.toggle ? Theme.Colors.GRAY_TWO : Theme.Colors.DANGER)};
`;
export const InputPhone = styled(InputStyle)`
  width: 180px;
  height: 56px;
  margin-top: 0px;
`;
export const TokenBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 320px;
  height: 56px;
  margin-top: 10px;
`;
export const GetToken = styled(buttonStyle)`
  width: 132px;
  height: 56px;
`;
export const NoticeText = styled.div<{ toggle: boolean }>`
  margin: 8px 0px 2px 8px;
  font-size: ${Theme.Fonts.FONT_ONE.BUTTON_THREE.fontSize};
  font-weight: ${Theme.Fonts.FONT_ONE.BUTTON_THREE.fontWeight};
  line-height: ${Theme.Fonts.FONT_ONE.BUTTON_THREE.lineHeight};
  color: ${(props) =>
    props.toggle ? Theme.Colors.BLACK : Theme.Colors.DANGER};
`;
export const JoinButton = styled(buttonStyle)`
  width: 320px;
  height: 64px;
  margin-top: 24px;
`;
export const AlreadyWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  font-size: ${Theme.Fonts.FONT_ONE.BODY_TWO.fontSize};
  font-weight: ${Theme.Fonts.FONT_ONE.BODY_TWO.fontWeight};
  line-height: ${Theme.Fonts.FONT_ONE.BODY_TWO.lineHeight};
`;
export default {
  IdBox,
  CheckId,
  InputId,
  InputNomal,
  InputPhone,
  TokenBox,
  GetToken,
  NoticeText,
  SignInContainer,
  SignInWrap,
  JoinButton,
  AlreadyWrap,
};
