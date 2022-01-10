import React from "react";
import ButtonWrapper from "./style";

interface IBtnType {
  type?: "button" | "submit" | "reset" | undefined;
  styleType?: string;
  children: any;
  disabled?: boolean;
  style?: any;
  onClick?: () => void;
  to?: string;
}

const Button = ({
  to,
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
  return to ? (
    <ButtonWrapper.Link to={to} type={type} {...rest}>
      {children}
    </ButtonWrapper.Link>
  ) : (
    <ButtonWrapper.Button type={type} disabled={disabled} {...rest}>
      {children}
    </ButtonWrapper.Button>
  );
};

export default Button;
