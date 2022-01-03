import React from "react";
import StyledCircleImage from "./style";
import CircleImageProps from "./_interface";

const CircleImage: React.FC<CircleImageProps> = function CircleImage({
  width,
  height,
  src,
  margin,
}) {
  return (
    <StyledCircleImage
      src={src}
      width={width}
      height={height}
      margin={margin}
    />
  );
};
export default CircleImage;
