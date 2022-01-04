import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import ImageSection from "../../components/ImageSection";
import LoginSection from "./LoginSection";
import FlexContainer, { FlexContainerProps } from "../../style/FlexContainer";
import Section from "../../components/Section";

import { RootState } from "../../redux/reducers";

const Props: FlexContainerProps = {
  direction: "row",
};

const LogIn: React.FC = function LogIn() {
  const logins = useSelector((state: RootState) => state.login);
  const nav = useNavigate();
  console.log(logins);
  useEffect(function () {
    if (axios.defaults.headers.common["x-auth-token"] === null) nav("/board");
    if (logins.row && logins.row?.name !== "noUser") {
      nav("/board");
    }
  });

  console.log(logins);
  return (
    <Section top="0px">
      <FlexContainer direction={Props.direction}>
        <ImageSection />
        <LoginSection />
      </FlexContainer>
    </Section>
  );
};
export default LogIn;
