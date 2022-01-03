import React from "react";
import StyledIconButton from "./style";
import IconButtonProps from "./_interface";

const IconButton: React.FC<IconButtonProps> = function IconButton({
  src,
  width,
  height,
  margin,
  onClick,
}) {
  return (
    <StyledIconButton
      src={src}
      width={width}
      height={height}
      margin={margin}
      onClick={onClick}
    />
  );
};
export default IconButton;
