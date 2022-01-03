import styled from "styled-components";
import { FROM_TABLET_TO_PHONE, MediaQueries } from "../../style/MediaQueries";

const HeaderLayout = styled.header`
  /* Auto Layout */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 48px;

  position: relative;
  height: 80px;
  left: 0px;
  right: 0px;
  top: 0px;

  /* White/White100 */

  background: #ffffff;
  /* Shadow1 */

  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.06);
  ${MediaQueries(FROM_TABLET_TO_PHONE)} {
    display: none;
  } ;
`;
export const MobileHeaderLayout = styled.header`
  display: none;
  ${MediaQueries(FROM_TABLET_TO_PHONE)} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    z-index: 60;
    position: fixed;
    height: 60px;
    left: 0px;
    right: 0px;
    top: 0px;

    background-color: #ffffff;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
  }
`;
export default HeaderLayout;
