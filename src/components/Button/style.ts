import styled from "styled-components";
import ButtonProps from "./interface";

const ButtonLayout = styled.button<ButtonProps>`
  display: flex;

  justify-content: center;
  align-items: center;
  border: ${({ btnType }) => {
    return btnType.includes("negative")
      ? "#397ef6 1px solid"
      : "#FFFFFF 1px solid";
  }};
  width: ${({ width }) => {
    if (width) return width;
    return "inherit";
  }};

  padding: ${({ btnType }) => {
    if (btnType.startsWith("basic")) return "10px 14px";
    if (btnType.startsWith("block")) return "16px 20px";
    return "12px 20px";
  }};

  background: ${({ btnType }) => {
    if (btnType.includes("negative")) {
      return "#FFFFFF";
    }
    return "#397ef6";
  }};
  border-radius: ${({ btnType }) => {
    switch (btnType) {
      case "icon":
        return "50px";
      default:
        return "8px";
    }
  }};
  max-width: 320px;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: ${({ btnType, margin }) => {
    if (btnType === "icon") return "0px 8px";
    if (margin) return margin;
    return "0px 10px";
  }};
`;

export default ButtonLayout;
