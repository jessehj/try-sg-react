import styled from "styled-components";
import InputProps from "./interface";

const StyledInput = styled.input<InputProps>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px 20px;

  width: ${({ width }) => {
    if (width) return width;
    return "inherit";
  }};
  height: ${({ height }) => {
    if (height) return height;
    return height;
  }};

  /* White/White100 */

  background: #ffffff;
  /* Gray/Gray02, Border */
  border: 2px solid #ebecf3;
  box-sizing: border-box;
  border-radius: 8px;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: ${({ margin }) => {
    if (margin) return margin;
    return "10px 0px";
  }};
  &::placeholder {
    /* Body/Body1, 16-B */

    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    /* gray/gray2 */
    color: #c9c9d2;

    /* Inside Auto Layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 10px;
  }
`;
export default StyledInput;
