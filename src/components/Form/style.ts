import styled from "styled-components";
import { FormProps } from "./_interface";
import {
  FROM_PHONE_TO_SMALL_PHONE,
  FROM_TABLET_TO_PHONE,
  MediaQueries,
} from "../../style/MediaQueries";

const StyledForm = styled.form<FormProps>`
  position: relative;
  width: ${({ width }) => {
    if (width) return width;
    return "inherit";
  }};
  height: ${({ height }) => {
    if (height) return height;
    return "100%";
  }};
  border: ${({ border }) => {
    if (border) return border;
    return "none";
  }};
  ${MediaQueries(FROM_TABLET_TO_PHONE)} {
    margin: 50px 0px;
    max-width: 100%;
  }
  ${MediaQueries(FROM_PHONE_TO_SMALL_PHONE)} {
    max-width: 100%;
  }
`;

export default StyledForm;
