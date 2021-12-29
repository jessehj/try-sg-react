import styled from "styled-components";
import Theme from "../../constants/theme";

const MainWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1838px;
  background-color: ${Theme.Colors.GRAY_ONE};
`;
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 1200px;
  height: 1188px;
  background-color: lightcoral;
`;
export default {
  MainWrap,
  CardContainer,
};
