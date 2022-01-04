import styled from "styled-components";
import BoardCardProps from "./_interface";
import { FROM_TABLET_TO_PHONE, MediaQueries } from "../../style/MediaQueries";

const StyledBoardCard = styled.div<BoardCardProps>`
  max-width: ${({ width }) => {
    if (width) return width;
    return "282px";
  }};
  margin: 24px 12px 24px 12px;
  position: relative;
  min-width: 282px;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0;
  background: #ffffff;
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.06);
  border-radius: 8px;

  &:hover {
    box-shadow: 0px 0px 32px rgba(0, 0, 0, 1);
  }
  ${MediaQueries(FROM_TABLET_TO_PHONE)} {
    width: 100%;
    max-width: 99%;
  }
`;
export default StyledBoardCard;
