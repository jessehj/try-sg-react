import React from "react";
import ButtonProps from "./_interface";
import ButtonLayout from "./style";
import Text from "./Text";

const Button: React.FC<ButtonProps> = function Button({
  width,
  btnType,
  margin,
  onClick,
  children,
}: ButtonProps) {
  return (
    <ButtonLayout
      margin={margin}
      width={width}
      btnType={btnType}
      onClick={onClick}
      type="button"
    >
      <Text btnType={btnType}>{children}</Text>
    </ButtonLayout>
  );
};
export default Button;
