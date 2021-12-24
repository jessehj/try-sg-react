import styled from "styled-components";
import { Theme } from "../../constants/theme";

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
export default {
  InputUser,
  InputStyle,
};
