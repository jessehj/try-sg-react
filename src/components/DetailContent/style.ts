import styled from "styled-components";
import Theme from "../../constants/theme";
import PrevImage from "../../assets/images/Prev.svg";
import NextImage from "../../assets/images/Next.svg";

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Theme.Colors.GRAY_ONE};
  @media ${Theme.DeviceSize.PHONE} {
    height: 180px;
    margin-top: 60px;
    padding: 0 12px;
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    top: 50%;
    height: 400px;
    margin-top: 80px;
  }
`;
const TitleInnerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  max-width: 700px;
  position: relative;
`;
const TitleDate = styled.div`
  position: absolute;
  width: 100%;
  font-family: ${Theme.Fonts.FONT_TWO.name};
  @media ${Theme.DeviceSize.PHONE} {
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    font-size: ${Theme.Fonts.FONT_TWO.BODY_TWO.fontSize};
    font-weight: ${Theme.Fonts.FONT_TWO.BODY_TWO.fontWeight};
    line-height: ${Theme.Fonts.FONT_TWO.BODY_TWO.lineHeight};
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    max-width: 700px;
    text-align: left;
    bottom: 24px;
    font-size: ${Theme.Fonts.FONT_TWO.BODY_ONE.fontSize};
    font-weight: ${Theme.Fonts.FONT_TWO.BODY_ONE.fontWeight};
    line-height: ${Theme.Fonts.FONT_TWO.BODY_ONE.lineHeight};
  }
`;
const MainTitle = styled.div`
  text-align: center;
  font-family: ${Theme.Fonts.FONT_TWO.name};
  @media ${Theme.DeviceSize.PHONE} {
    font-size: ${Theme.Fonts.FONT_TWO.HEADING_TWO.fontSize};
    font-weight: ${Theme.Fonts.FONT_TWO.HEADING_TWO.fontWeight};
    line-height: ${Theme.Fonts.FONT_TWO.HEADING_TWO.lineHeight};
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    font-size: ${Theme.Fonts.FONT_TWO.HEADING_ONE.fontSize};
    font-weight: ${Theme.Fonts.FONT_TWO.HEADING_ONE.fontWeight};
    line-height: ${Theme.Fonts.FONT_TWO.HEADING_ONE.lineHeight};
  }
`;
const MainText = styled.div`
  @media ${Theme.DeviceSize.PHONE} {
    padding: 32px 12px 0 12px;
    line-height: 23px;
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    max-width: 700px;
    margin: 0 auto;
    padding-top: 96px;
    line-height: 32px;
  }
`;
const BottomNav = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
  font-family: ${Theme.Fonts.FONT_ONE.name};
  font-size: ${Theme.Fonts.FONT_ONE.BUTTON_TWO.fontSize};
  font-weight: ${Theme.Fonts.FONT_ONE.BUTTON_TWO.fontWeight};
  line-height: ${Theme.Fonts.FONT_ONE.BUTTON_TWO.lineHeight};
  @media ${Theme.DeviceSize.PHONE} {
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    display: flex;
    justify-content: space-between;
  }
`;
const ButtonStyle = styled.button`
  height: 60px;
  display: flex;
  align-items: center;
  border: 0px;
  outline: 0px;
  background-color: ${Theme.Colors.WHITE};
  font-family: ${Theme.Fonts.FONT_ONE.name};
  @media ${Theme.DeviceSize.PHONE} {
    width: 100%;
    height: 60px;
    padding-left: 16px;
    font-size: ${Theme.Fonts.FONT_ONE.BUTTON_TWO.fontSize};
    font-weight: ${Theme.Fonts.FONT_ONE.BUTTON_TWO.fontWeight};
    line-height: ${Theme.Fonts.FONT_ONE.BUTTON_TWO.lineHeight};
    & + & {
      border-top: 1px solid ${Theme.Colors.GRAY_TWO};
    }
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    width: 50%;
    height: 80px;
    padding-left: 48px;
    font-size: ${Theme.Fonts.FONT_ONE.BUTTON_TWO.fontSize};
    font-weight: ${Theme.Fonts.FONT_ONE.BUTTON_TWO.fontWeight};
    line-height: ${Theme.Fonts.FONT_ONE.BUTTON_TWO.lineHeight};
    & + & {
      border-top: 0px;
    }
    &:nth-child(2) {
      flex-direction: row-reverse;
      padding-left: 0px;
      padding-right: 48px;
    }
  }
  &:hover {
    cursor: pointer;
  }
`;
const ButtonTextBox = styled.div`
  height: 24px;
  display: flex;
  @media ${Theme.DeviceSize.PHONE} {
    max-width: calc(100% - 100px);
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    max-width: calc(100% - 300px);
  }
`;
const ButtonTextBoxRight = styled(ButtonTextBox)`
  @media ${Theme.DeviceSize.PHONE} {
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    display: flex;
    flex-direction: row-reverse;
  }
`;
const ButtonBoxTextStyle = styled.div`
  display: inline-block;
  height: 24px;
  line-height: 24px;
  color: ${Theme.Colors.GRAY_FOUR};
  white-space: nowrap;
`;
const ButtonBoxTextTitle = styled(ButtonBoxTextStyle)`
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${Theme.Colors.BLACK};
`;
const PrevButtonIcon = styled.div`
  flex: none;
  width: 24px;
  height: 24px;
  background-image: url(${PrevImage});
  background-repeat: no-repeat;
  margin-right: 5px;
`;
const NextButtonIcon = styled.div`
  flex: none;
  @media ${Theme.DeviceSize.PHONE} {
    margin-right: 5px;
    background-image: url(${PrevImage});
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    margin-right: 0px;
    margin-left: 5px;
    background-image: url(${NextImage});
  }
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
`;
export default {
  TitleContainer,
  TitleDate,
  TitleInnerBox,
  MainTitle,
  MainText,
  BottomNav,
  ButtonTextBox,
  ButtonTextBoxRight,
  ButtonBoxTextStyle,
  ButtonBoxTextTitle,
  PrevButtonIcon,
  NextButtonIcon,
  ButtonStyle,
};
