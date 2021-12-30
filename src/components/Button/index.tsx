import React from "react";
import ButtonProps from "./interface";
import ButtonLayout from "./style";
import Text from "./Text";

const Button: React.FC<ButtonProps> = function Button({
  width,
  btnType,
  margin,
  children,
}: ButtonProps) {
  return (
    <ButtonLayout margin={margin} width={width} btnType={btnType}>
      <Text btnType={btnType}>{children}</Text>
    </ButtonLayout>
  );
};
export default Button;
