import styled from "styled-components";
import Theme from "../../constants/theme";

export const SalyWrap = styled.div`
  @media ${Theme.DeviceSize.PHONE} {
    display: none;
    justify-content: center;
    align-items: center;
    width: 320px;
    height: 296px;
    min-height: 296px;
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    display: flex;
    width: 960px;
    height: 1080px;
    justify-content: center;
    align-items: center;
    background-color: ${Theme.Colors.GRAY_ONE};
  }
`;

export default {
  SalyWrap,
};
