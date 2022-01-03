import styled from "styled-components";

const StyledMobileMenu = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => {
    if (isOpen === false) return "none";
    return "flex";
  }};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px;
  opacity: ${({ isOpen }) => {
    if (isOpen === true) return "1";
    return "0";
  }};
  position: fixed;
  width: 100%;
  height: 470px;
  left: 0px;
  top: 85px;
  transition: opacity 0.5s;
  /* White/White100 */

  background: #ffffff;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.06);
`;
export default StyledMobileMenu;
