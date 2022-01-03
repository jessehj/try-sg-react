import React from "react";

import IconButtonProps from "../../IconButton/_interface";
import IconButton from "../../IconButton";

const PageIcon: React.FC<IconButtonProps> = function PageIcon({
  src,
  onClick,
}) {
  return (
    <IconButton src={src} width="7.84px" height="12px" onClick={onClick} />
  );
};
export default PageIcon;
