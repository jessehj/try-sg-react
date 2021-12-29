import styled from "styled-components";
import { Theme } from "../../constants/theme";

const ViewContainer = styled.div`
  width: 100vw;
  min-width: 360px;
  min-height: 700px;
  background-color: ${Theme.Colors.WHITE};
`;
const InputTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  background-color: ${Theme.Colors.GRAY_ONE};
  @media ${Theme.DeviceSize.PHONE} {
    height: 240px;
    margin-top: 60px;
    padding: 0 18px;
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    height: 480px;
    margin-top: 80px;
  }
`;
const TitleInput = styled.input`
  position: absolute;
  width: 100%;
  font-size: ${Theme.Fonts.FONT_TWO.HEADING_TWO.fontSize};
  font-weight: ${Theme.Fonts.FONT_TWO.HEADING_TWO.fontWeight};
  line-height: ${Theme.Fonts.FONT_TWO.HEADING_TWO.lineHeight};
  word-wrap: break-word;
  text-align: center;
  border: 0px;
  outline: 0px;
  background-color: ${Theme.Colors.GRAY_ONE};
`;
const QuillBoxWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${Theme.DeviceSize.PHONE} {
    padding: 0 20px 80px 20px;
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    padding: 0 20px 100px 20px;
  }
`;
const QuillBox = styled.div`
  width: 100%;
  max-width: 700px;
  @media ${Theme.DeviceSize.PHONE} {
    margin-top: 64px;
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    margin-top: 120px;
  }
`;

export default {
  ViewContainer,
  InputTitleContainer,
  TitleInput,
  QuillBoxWrap,
  QuillBox,
};
