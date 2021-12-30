import styled from "styled-components";
import BoardCardProps from "./interface";

const StyledBoardCard = styled.div<BoardCardProps>`
  max-width: ${({ width }) => {
    if (width) return width;
    return "282px";
  }};
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0;
  background: #ffffff;
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
`;
export default StyledBoardCard;
