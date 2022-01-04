import styled from "styled-components";
import { TextItem } from "./_interface";

const TextButtonGroup = styled.div`
  text-align: center;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: #c9c9d2;
  margin-top: 12px;
`;
const StyledTextButton = styled.span<TextItem>`
  /* Body/Body2, 14-B */

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  cursor: ${({ onClick }) => {
    if (onClick) return "pointer";
    return "default";
  }};
  /* identical to box height, or 143% */
  /* gray/gray2 */

  color: ${({ color }) => {
    if (color) return color;
    return "#c9c9d2";
  }};
`;

export { TextButtonGroup, StyledTextButton };
