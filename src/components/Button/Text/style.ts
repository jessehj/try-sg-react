import styled from "styled-components";

const ButtonText = styled.div<{ btnType: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-style: normal;
  font-weight: ${({ btnType }) => {
    if (btnType === "icon") return "500";
    return "bold";
  }};
  font-size: ${({ btnType }) => {
    return btnType.startsWith("block") ? "16px" : "14px";
  }};
  line-height: ${({ btnType }) => {
    if (btnType.startsWith("basic")) return "20px";
    return "24px";
  }};
  color: ${({ btnType }) => {
    return btnType.includes("negative") ? "#397ef6" : "#FFFFFF";
  }};
  height: ${({ btnType }) => {
    if (btnType.startsWith("basic")) return "20px";
    return "24px";
  }};
`;
export default ButtonText;
