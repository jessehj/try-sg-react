import styled from "styled-components";
import Theme from "../../constants/theme";

const PaginationWrap = styled.div`
  margin-top: 180px;
`;
const PaginationBox = styled.div`
  display: flex;
  align-items: center;
`;
const PageButtonBox = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
`;
const PageButton = styled.button`
  background-color: ${Theme.Colors.GRAY_ONE};
  border: 0px;
  outline: 0px;
`;

export default {
  PaginationWrap,
  PaginationBox,
  PageButtonBox,
  PageButton,
};
