import React, { useEffect, useState } from "react";
import { Theme } from "../../constants/theme";
import MainMobile from "./MainMobile";
import MainPc from "./MainPc";

const BoardMain = function BoardMain() {
  const updateWidth = () => {
    setDesktop(window.innerWidth >= Number(Theme.device.DESKTOP));
  };

  const [isDesktop, setDesktop] = useState(
    typeof window !== undefined &&
      window.innerWidth >= Number(Theme.device.DESKTOP)
  );

  useEffect(() => {
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return isDesktop ? <MainPc /> : <MainMobile />;
};

export default BoardMain;
