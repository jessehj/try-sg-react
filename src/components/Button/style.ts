import styled from "styled-components";
import ButtonProps from "./_interface";

const ButtonLayout = styled.button<ButtonProps>`
  display: flex;

  justify-content: center;
  align-items: center;
  color: ${({ btnType }) => {
    if (btnType.includes("modal_positive")) return "black";
    return btnType.includes("negative") || btnType === "basic_icon"
      ? "#397ef6"
      : "#FFFFFF";
  }};
  border: ${({ btnType }) => {
    if (btnType.startsWith("modal")) return "1px solid #FAFAFA";
    return btnType.includes("negative") || btnType === "basic_icon"
      ? "#397ef6 1px solid"
      : "#FFFFFF 1px solid";
  }};
  width: ${({ width, btnType }) => {
    if (btnType === "basic_icon") return "fit-content";
    if (width) return width;
    return "inherit";
  }};

  padding: ${({ btnType }) => {
    if (btnType.startsWith("basic") || btnType === "basic_icon")
      return "10px 14px";
    if (btnType.startsWith("block")) return "16px 20px";
    return "12px 20px";
  }};

  background: ${({ btnType }) => {
    if (btnType.includes("disabled")) return "#B0CBFB";
    if (btnType.includes("negative") || btnType === "basic_icon") {
      return "#FFFFFF";
    }
    return "#397ef6";
  }};
  cursor: pointer;
  border-radius: ${({ btnType }) => {
    if (btnType.startsWith("modal")) return "0";
    switch (btnType) {
      case "icon":
        return "50px";
      case "basic_icon":
        return "50px";
      default:
        return "8px";
    }
  }};
  max-width: ${({ maxWidth }) => {
    if (maxWidth) return maxWidth;
    return "320px";
  }};
  flex-shrink: inherit;
  order: 1;
  flex-grow: 0;
  margin: ${({ btnType, margin }) => {
    if (btnType === "icon") return "0px 8px";
    if (margin) return margin;
    return "0px 20px";
  }};
`;

export default ButtonLayout;
