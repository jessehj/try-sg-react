import styled from "styled-components";
import { Theme } from "../../../constants/theme";

export const AbsoluteContainer = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: 100;

  box-shadow: 16px 0 0 0 rgba(0, 0, 0, 0.06);
`;
export const MenuModalContainer = styled.div<{ toggle: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 495px;

  background-color: ${Theme.Colors.WHITE};

  animation: ${(props) => (props.toggle ? "fadein 0.5s" : "fadeout 0.5s")};

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;
export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 35%;
  min-height: 201px;

  border-bottom: 1px solid ${Theme.Colors.GRAY_TWO};
  &:last-child {
    border: none;
  }
`;
export const UserName = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: ${Theme.Colors.GRAY_FIVE};
`;
export const WriteBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 30px;

  border: 1px solid ${Theme.Colors.PRIMARY_COLOR};
  border-radius: 100px;

  background-color: ${Theme.Colors.WHITE};
  color: ${Theme.Colors.PRIMARY_COLOR};
  font-size: 12px;
`;
export const MenuContainer = styled(UserContainer)`
  height: 50%;
  min-height: 232px;
`;
export const MenuList = styled.div`
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;

  &:hover {
    cursor: pointer;
  }
`;
export const Footer = styled(UserContainer)`
  height: 15%;
  min-height: 62px;
`;
export const FooterBtn = styled.button`
  width: 69px;
  height: 30px;
  text-align: center;
  font-size: 12px;
  line-height: 18px;

  background-color: ${Theme.Colors.WHITE};
  border: 1px solid ${Theme.Colors.GRAY_FOUR};
  border-radius: 100px;
  color: ${Theme.Colors.GRAY_FOUR};
`;

export default {
  AbsoluteContainer,
  MenuModalContainer,
  UserContainer,
  MenuContainer,
  Footer,
  FooterBtn,
};
