import styled from "styled-components";
import Theme from "../../constants/theme";

const CardContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  @media ${Theme.DeviceSize.PHONE} {
    width: 328px;
    height: 374px;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    width: 282px;
    height: 380px;
    margin: 12px;
    box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.06);
    transition: 0.3s linear;
    &:hover {
      box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.2);
    }
  }
`;
const ImageArea = styled.div`
  width: 100%;
  height: 160px;
`;
const ContentWrap = styled.div`
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 114px;
  padding: 12px 24px;
  box-sizing: border-box;
`;
const IconArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  border-top: 1px solid ${Theme.Colors.GRAY_TWO};
  padding: 0 26px 0 24px;
`;
const FunctionBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60px;
  height: 24px;
`;
const FunctionButton = styled.button`
  width: 24px;
  height: 24px;
  background-color: ${Theme.Colors.WHITE};
  outline: 0px;
  border: 0px;
`;
const CardTitle = styled.h6`
  display: -webkit-box;
  width: 234px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-family: ${Theme.Fonts.FONT_ONE.name};
  font-size: ${Theme.Fonts.FONT_ONE.HEADING_SIX.fontSize};
  font-weight: ${Theme.Fonts.FONT_ONE.HEADING_SIX.fontWeight};
  line-height: ${Theme.Fonts.FONT_ONE.HEADING_SIX.lineHeight};
`;
const CardText = styled.div`
  display: -webkit-box;
  width: 234px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-family: ${Theme.Fonts.FONT_ONE.name};
  font-size: ${Theme.Fonts.FONT_ONE.BODY_THREE.fontSize};
  font-weight: ${Theme.Fonts.FONT_ONE.BODY_THREE.fontWeight};
  line-height: ${Theme.Fonts.FONT_ONE.BODY_THREE.lineHeight};
`;
export default {
  CardContainer,
  ImageArea,
  TextArea,
  ContentWrap,
  IconArea,
  FunctionBox,
  FunctionButton,
  CardTitle,
  CardText,
};
