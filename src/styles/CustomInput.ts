import styled from "styled-components";
import { GRAY03, INPUT_BORDER } from "./Variables";

export const CustomInput = styled.input`
  border: ${INPUT_BORDER};
  height: 56px;
  border-radius: 8px;
  padding: 0 40px 0px 20px;
  &::placeholder {
    font-size: 16px;
    font-weight: 700;
    color: ${GRAY03};
  }
`;
