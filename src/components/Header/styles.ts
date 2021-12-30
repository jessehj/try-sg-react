import styled from "styled-components";

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
`;
export default HeaderLayout;
