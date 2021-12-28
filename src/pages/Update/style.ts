import styled from "styled-components";
import { Theme } from "../../constants/theme";

const UpdateWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  min-height: 1000px;
  background-color: ${Theme.Colors.GRAY_ONE};
`;
const UpdateSize = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  padding: 0 20px 0 20px;
`;
const UpdateTitle = styled.h3`
  margin: 24px 0 32px 0;
  font-size: ${Theme.Fonts.FONT_ONE.HEADING_THREE.fontSize};
  font-weight: ${Theme.Fonts.FONT_ONE.HEADING_THREE.fontWeight};
  line-height: ${Theme.Fonts.FONT_ONE.HEADING_THREE.lineHeight};
`;
const UpdateSubTitle = styled.h5`
  font-size: ${Theme.Fonts.FONT_ONE.HEADING_FIVE.fontSize};
  font-weight: ${Theme.Fonts.FONT_ONE.HEADING_FIVE.fontWeight};
  line-height: ${Theme.Fonts.FONT_ONE.HEADING_FIVE.lineHeight};
`;
const InputTitle = styled.h6`
  font-size: ${Theme.Fonts.FONT_ONE.BODY_TWO.fontSize};
  font-weight: ${Theme.Fonts.FONT_ONE.BODY_TWO.fontWeight};
  line-height: ${Theme.Fonts.FONT_ONE.BODY_TWO.lineHeight};
`;
const InputWrap = styled.div`
  width: 100%;
  margin-top: 20px;
`;
const UpdateInputStyle = styled.input`
  width: 100%;
  height: 56px;
  border: 2px solid ${Theme.Colors.GRAY_TWO};
  box-sizing: border-box;
  border-radius: 8px;
  margin-top: 12px;
  padding-left: 20px;
`;
const UpdatePwInputStyle = styled(UpdateInputStyle)`
  width: 180px;
  margin-top: 0px;
`;
const UpdateButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  outline: 0px;
  background-color: ${Theme.Colors.WHITE};
  border: 0px;
`;
const GoChangePwButton = styled(UpdateButtonStyle)`
  width: 132px;
  height: 100%;
  background-color: ${Theme.Colors.PRIMARY_COLOR};
  color: ${Theme.Colors.WHITE};
`;
const ChangeButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 56px;
  margin-top: 20px;
`;
const GoChangePwButtonWrap = styled(ChangeButtonWrap)`
  margin-top: 12px;
`;
const ChangePwButton = styled(UpdateButtonStyle)`
  width: 156px;
  height: 100%;
  &:nth-child(1) {
    border: 2px solid ${Theme.Colors.GRAY_TWO};
  }
  &:nth-child(2) {
    background-color: ${Theme.Colors.PRIMARY_COLOR};
    color: ${Theme.Colors.WHITE};
  }
`;
const HrLine = styled.hr`
  width: 100%;
  outline: 0px;
  margin: 33px 0px;
  border: 1px solid ${Theme.Colors.GRAY_TWO};
`;
const PictureUpdateWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;
const PictureUploadButton = styled.button`
  width: 131px;
  height: 40px;
  border-radius: 8px;
  background-color: ${Theme.Colors.PRIMARY_COLOR};
  color: ${Theme.Colors.WHITE};
  margin: 0 8px 0 20px;
  outline: 0px;
  border: 0px;
`;
const PictureDeleteButton = styled.button`
  width: 73px;
  height: 40px;
  border-radius: 8px;
  outline: 0px;
  border: 2px solid ${Theme.Colors.GRAY_TWO};
  background-color: ${Theme.Colors.WHITE};
`;
const SaveButton = styled(UpdateButtonStyle)`
  height: 56px;
  margin-top: 20px;
  color: ${Theme.Colors.WHITE};
  background-color: ${Theme.Colors.PRIMARY_COLOR};
`;
export default {
  UpdateWrap,
  UpdateSize,
  UpdateTitle,
  UpdateSubTitle,
  InputTitle,
  InputWrap,
  UpdateInputStyle,
  UpdateButtonStyle,
  GoChangePwButton,
  GoChangePwButtonWrap,
  ChangePwButton,
  ChangeButtonWrap,
  UpdatePwInputStyle,
  HrLine,
  PictureUpdateWrap,
  PictureUploadButton,
  PictureDeleteButton,
  SaveButton,
};
