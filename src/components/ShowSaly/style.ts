import styled from "styled-components";
import Theme from "../../constants/theme";

export const SalyWrap = styled.div`
  @media ${Theme.DeviceSize.PHONE} {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 320px;
    height: 296px;
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    display: flex;
    width: 50%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${Theme.Colors.GRAY_ONE};
  }
`;

export default {
  SalyWrap,
};
