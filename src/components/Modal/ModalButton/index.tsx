import React, { ReactNode } from "react";
import StyledModalButton from "./style";

const ModalButton: React.FC<{ btnType: string; children: ReactNode }> =
  function ModalButton({ btnType, children }) {
    return <StyledModalButton btnType={btnType}>{children}</StyledModalButton>;
  };
export default ModalButton;
