import { css } from "styled-components";

export const ellipsisDoubleLine = css`
  word-break: keep-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const flexCenterCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
