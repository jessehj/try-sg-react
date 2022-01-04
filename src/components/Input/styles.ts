import styled from "styled-components";
import InputProps from "./_interface";
import PwdIcon from "../../assets/icon/Pwd.svg";
import IdIcon from "../../assets/icon/Id.svg";

const StyledInput = styled.input<InputProps>`
  webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  padding: 16px 20px;

  width: ${({ width }) => {
    if (width) return width;
    return "100%";
  }};
  height: ${({ height }) => {
    if (height) return height;
    return "56px";
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

  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* gray/gray2 */
  color: #222222;
  background-image: ${({ inputName }) => {
    if (inputName === "Id") return `url(${IdIcon})`;
    if (inputName?.startsWith("Pwd")) return `url(${PwdIcon})`;
    return "none";
  }};
  background-repeat: no-repeat;
  background-position: right;
  /* Inside Auto Layout */

  order: 0;

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
    background-image: ${({ inputName }) => {
      if (inputName === "Id") return `url(${IdIcon})`;
      if (inputName?.startsWith("Pwd")) return `url(${PwdIcon})`;
      return "none";
    }};
    background-repeat: no-repeat;
    background-position: right;
    /* Inside Auto Layout */

    order: 0;

    margin: 0px 10px;
  }
`;
export default StyledInput;
