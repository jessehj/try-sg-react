import styled from "styled-components";
import Theme from "../../constants/theme";

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1838px;
  background-color: ${Theme.Colors.GRAY_ONE};
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 768px;
  height: 50px;
  margin-top: 176px;
  margin-bottom: 84px;
  padding-left: 24px;
  border-bottom: 1px solid ${Theme.Colors.BLACK};
`;
const SearchInput = styled.input`
  width: 746px;
  outline: 0px;
  border: 0px;
  background-color: ${Theme.Colors.GRAY_ONE};
`;
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1224px;
`;
export default {
  MainWrap,
  CardContainer,
  SearchContainer,
  SearchInput,
};
