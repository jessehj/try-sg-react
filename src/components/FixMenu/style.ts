import styled from "styled-components";
import Theme from "../../constants/theme";

const TopWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  top: 0px;
  box-sizing: border-box;
  background-color: ${Theme.Colors.WHITE};
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
  background-color: red;
  @media ${Theme.DeviceSize.PHONE} {
    padding: 0 24px 0 16px;
    height: 60px;
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    padding: 0 60px 0 48px;
    height: 80px;
  }
`;

export default {
  TopWrap,
};
