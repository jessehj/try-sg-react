import styled from "styled-components";
import { Theme } from "../../constants/theme";

const UnderWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  bottom: 0px;
  box-sizing: border-box;
  background-color: ${Theme.Colors.WHITE};
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.06);
  @media ${Theme.DeviceSize.PHONE} {
    padding: 0 16px;
    height: 60px;
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    padding: 0 48px;
    height: 80px;
  }
`;
const ButtonBox = styled.div`
  display: flex;
  @media ${Theme.DeviceSize.PHONE} {
    height: 30px;
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    height: 48px;
  }
`;
const TempSave = styled.button`
  border: 1px solid ${Theme.Colors.PRIMARY_COLOR};
  background-color: ${Theme.Colors.WHITE};
  color: ${Theme.Colors.PRIMARY_COLOR};
  ouline: 0px;
  box-sizing: border-box;
  @media ${Theme.DeviceSize.PHONE} {
    width: 69px;
    height: 100%;
    border-radius: 50px;
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    width: 100px;
    height: 100%;
    border-radius: 100px;
  }
`;
const SaveContent = styled.button`
  height: 100%;
  margin-left: 14px;
  border: 0px;
  outline: 0px;
  background-color: ${Theme.Colors.PRIMARY_COLOR};
  color: ${Theme.Colors.WHITE};
  @media ${Theme.DeviceSize.PHONE} {
    width: 47px;
    border-radius: 50px;
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    width: 70px;
    border-radius: 100px;
  }
`;
export default {
  UnderWrap,
  TempSave,
  ButtonBox,
  SaveContent,
};
