import styled from "styled-components";

const TextButtonGroup = styled.div`
  text-align: center;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: #c9c9d2;
`;
const StyledTextButton = styled.a<{ color?: string }>`
  /* Body/Body2, 14-B */

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  /* gray/gray2 */

  color: ${({ color }) => {
    if (color) return color;
    return "#c9c9d2";
  }};
`;

export { TextButtonGroup, StyledTextButton };
