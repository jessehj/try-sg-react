import styled from "styled-components";
import { Theme } from "../../../constants/theme";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 149px;
  height: 96px;
  border: 1px solid ${Theme.Colors.GRAY_TWO};
  border-radius: 8px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
  background-color: ${Theme.Colors.WHITE};

  z-index: 10;
`;
export const ListContainer = styled.div`
  display: flex;
  align-items: center;

  width: inherit;
  height: 40px;

  &:last-child {
    color: ${Theme.Colors.GRAY_FOUR}
`;
export const Lists = styled.div`
  width: auto;
  height: auto;

  padding-left: 16px;

  &:hover {
    cursor: pointer;
  }
`;
export default {
  ModalContainer,
  ListContainer,
  Lists,
};
