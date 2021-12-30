import React from "react";
import StyledIconButton from "./style";
import IconButtonProps from "./interface";

const IconButton: React.FC<IconButtonProps> = function IconButton({
  src,
  width,
  height,
  margin,
}) {
  return (
    <StyledIconButton src={src} width={width} height={height} margin={margin} />
  );
};
export default IconButton;
