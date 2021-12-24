import styled from "styled-components";
import { Theme } from "../../constants/theme";

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
    width: 960px;
    height: 1080px;
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
export default {
  InputWrap,
  InputContainer,
  InputButton,
  InputHeader,
};
