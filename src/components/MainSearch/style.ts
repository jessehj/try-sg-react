import styled from "styled-components";
import Theme from "../../constants/theme";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${Theme.Colors.BLACK};
  @media ${Theme.DeviceSize.PHONE} {
    width: 316px;
    height: 50px;
    padding-left: 12px;
    margin-top: 92px;
    margin-bottom: 32px;
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    width: 768px;
    height: 50px;
    margin-top: 176px;
    margin-bottom: 84px;
    padding-left: 24px;
  }
`;
const SearchInput = styled.input`
  outline: 0px;
  border: 0px;
  background-color: ${Theme.Colors.GRAY_ONE};
  @media ${Theme.DeviceSize.PHONE} {
    width: 292px;
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    width: 746px;
  }
`;

export default {
  SearchContainer,
  SearchInput,
};
