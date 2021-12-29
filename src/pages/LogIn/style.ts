import styled from "styled-components";
import Theme from "../../constants/theme";

export const LoginWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  min-height: 700px;
  background-color: ${Theme.Colors.GRAY_ONE};
`;

export const LoginSize = styled.div`
  @media ${Theme.DeviceSize.PHONE} {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 320px;
    height: 640px;
    padding: 0px 20px 18px 20px;
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    flex-direction: row;
    width: 100%;
    max-width: 1920px;
    height: 100%;
    padding: 0px 20px 0px 20px;
  }
`;

export default {
  LoginSize,
  LoginWrap,
};
