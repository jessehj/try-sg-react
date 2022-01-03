import styled from "styled-components";
import { MediaQueries, FROM_TABLET_TO_PHONE } from "../../style/MediaQueries";

const MenuLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 214px;
  height: 24px;
  left: 184px;
  top: calc(50% - 24px / 2);
`;
const MobileMenuLayout = styled.div`
  ${MediaQueries(FROM_TABLET_TO_PHONE)} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #ebecf3;
    border-bottom: 1px solid #ebecf3;
    width: 100%;
    padding: 12px 0 12px 0;
  }
`;
export { MobileMenuLayout };
export default MenuLayout;
