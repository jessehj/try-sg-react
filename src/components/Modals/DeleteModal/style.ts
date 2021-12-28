import styled from "styled-components";
import { Theme } from "../../../constants/theme";

export const AbsoluteContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  z-index: 100;
`;
export const AlertContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);

  background-color: ${Theme.Colors.WHITE};
  border-radius: 8px;

  z-index: 1000;
  overflow: hidden;

  @media ${Theme.DeviceSize.PHONE} {
    width: 264px;
    height: 180px;

    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.2);
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    width: 384px;
    height: 196px;

    box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.2);
  }
`;
export const TextContainer = styled.div`
  width: 194px;
  height: 40px;

  font-size: 14px;
  lign-height: 20px;
  text-align: center;
`;

export const AlertContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 194px;
  height: 84px;

  margin-top: 24px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${Theme.DeviceSize.PHONE} {
    width: 264px;
    height: 49px;

    border-top: 1px solid ${Theme.Colors.GRAY_TWO};
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    width: 172px;
    height: 40px;

    margin: 24px 106px;
    border: none;
  }
`;

export const CancelBtn = styled.button`
  background-color: ${Theme.Colors.WHITE};
  color: ${Theme.Colors.GRAY_FOUR};
  &:hover {
    cursor: pointer;
  }

  @media ${Theme.DeviceSize.PHONE} {
    width: 132px;
    height: 48px;
    border: none;
    outline: none;
    font-size: 12px;
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    width: 80px;
    height: 40px;

    border: 1px solid ${Theme.Colors.GRAY_FOUR};
    border-radius: 8px;

    font-weight: bold;
    font-size: 14px;
  }
`;
export const DeleteBtn = styled(CancelBtn)`
  @media ${Theme.DeviceSize.PHONE} {
    width: 132px;
    height: 48px;
    color: ${Theme.Colors.PRIMARY_COLOR};

    border-left: 1px solid ${Theme.Colors.GRAY_TWO};
  }

  @media ${Theme.DeviceSize.DESKTOP} {
    width: 80px;
    height: 40px;
    border: none;
    background-color: ${Theme.Colors.PRIMARY_COLOR};
    color: ${Theme.Colors.WHITE};
  }
`;

export default {
  AlertContainer,
  AbsoluteContainer,
  TextContainer,
  AlertContent,
  ButtonContainer,
};
