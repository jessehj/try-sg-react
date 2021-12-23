import React from "react";
import * as Header from "./style";
import assets from "../../assets/images/Saly_img.svg";

const MobileHeader = function () {
  return (
    <Header.Container>
      <img src={assets} alt="hele" />
    </Header.Container>
  );
};

export default MobileHeader;
