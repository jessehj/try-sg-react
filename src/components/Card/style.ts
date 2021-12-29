import styled from "styled-components";
import Theme from "../../constants/theme";

const CardContainer = styled.div`
  border-radius: 8px;
  background-color: lightpink;
  overflow: hidden;
  @media ${Theme.DeviceSize.PHONE} {
    width: 328px;
    height: 374px;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
  }
  @media ${Theme.DeviceSize.PHONE} {
    width: 282px;
    height: 380px;
    box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.06);
  }
`;
const ImageArea = styled.div`
  width: 100%;
  height: 160px;
`;
const ContentWrap = styled.div`
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: lightblue;
`;
const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 114px;
  padding: 12px 24px;
  box-sizing: border-box;
  background-color: lightgoldenrodyellow;
`;
const IconArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  border-top: 1px solid ${Theme.Colors.GRAY_TWO};
  background-color: lightcoral;
  padding: 0 26px 0 24px;
`;
const FunctionBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60px;
  height: 24px;
`;
const FunctionButton = styled.button`
  width: 24px;
  height: 24px;
  background-color: ${Theme.Colors.WHITE};
  outline: 0px;
  border: 0px;
`;
export default {
  CardContainer,
  ImageArea,
  TextArea,
  ContentWrap,
  IconArea,
  FunctionBox,
  FunctionButton,
};
