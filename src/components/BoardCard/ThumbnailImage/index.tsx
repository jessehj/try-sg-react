import React from "react";
import ThumnailImageProps from "./interface";
import StyledThumnailImage from "./style";

const ThumbnailImage: React.FC<ThumnailImageProps> = function ThumbnailImage({
  src,
}) {
  return <StyledThumnailImage src={src} />;
};
export default ThumbnailImage;
