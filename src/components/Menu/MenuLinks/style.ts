import styled from "styled-components";
import {
  FROM_TABLET_TO_PHONE,
  MediaQueries,
} from "../../../style/MediaQueries";

const MenuLink = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  display: flex;
  align-items: center;
  text-align: center;

  /* Gray/Gray06, Txt-main */

  color: #222222;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 24px;
  &:hover {
    color: #397ef6;
    cursor: pointer;
  }
  ${MediaQueries(FROM_TABLET_TO_PHONE)} {
    font-size: 22px;
    line-height: 33px;
    font-weight: 700;
    margin: 12px 0;
    justify-content: center;
    text-align: center;
    width: fit-content;
  }
`;

export default MenuLink;
