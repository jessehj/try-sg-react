import styled from "styled-components";
import { Theme } from "../../constants/theme";

const InputContainer = styled.div`
  @media ${Theme.DeviceSize.PHONE} {
    height: 122px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  @media ${Theme.DeviceSize.DESKTOP} {
  }
`;

export default {
  InputContainer,
};
