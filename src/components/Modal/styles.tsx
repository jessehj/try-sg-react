import styled from "styled-components";
import { FROM_TABLET_TO_PHONE, MediaQueries } from "../../style/MediaQueries";

const StyledModal = styled.div`
  position: fixed;
  max-width: 384px;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 196px;
  background-color: #ffffff;
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  ${MediaQueries(FROM_TABLET_TO_PHONE)} {
    max-width: 90%;
  }
`;
const DisabledDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  width: 100vw;
  z-index: 360;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { StyledModal, DisabledDiv };
