import React, { useState, useEffect } from "react";
import MainMobile from "../../components/MainMobile";
import MainPc from "../../components/MainPc";

const Main = function () {
  const [deviceSize, setDeviceSize] = useState<number>(window.innerWidth);
  const checkSize = () => {
    setDeviceSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  return (
    <div>
      {deviceSize >= 1300 ? (
        <div>
          <MainPc />
        </div>
      ) : (
        <div>
          <MainMobile />
        </div>
      )}
    </div>
  );
};

export default Main;
