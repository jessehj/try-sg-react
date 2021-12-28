import React from "react";
import { ReactComponent as Saly } from "../../assets/images/Saly_img.svg";
import style from "./style";

const ShowSaly = function () {
  return (
    <style.SalyWrap>
      <Saly
        style={{
          width: "70%",
          height: "70%",
          maxWidth: "581px",
          maxHeight: "581px",
          minWidth: "164px",
          minHeight: "200px",
        }}
      />
    </style.SalyWrap>
  );
};

export default ShowSaly;
