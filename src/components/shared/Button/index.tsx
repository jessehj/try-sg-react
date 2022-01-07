import React from "react";
import ButtonWrapper from "./style";

interface IBtnType {
  type?: "button" | "submit" | "reset" | undefined;
  styleType?: string;
  children: any;
  disabled?: boolean;
  style?: any;
  onClick?: () => void;
}

const Button = ({
  type = "button",
  styleType,
  disabled = false,
  children,
  ...rest
}: IBtnType) => {
  /**
   * State
   */

  /**
   * Private Functions
   */
  /**
   * Event Actions
   */

  /**
   * Render Helpers
   */
  return (
    <ButtonWrapper type={type} disabled={disabled} {...rest}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
