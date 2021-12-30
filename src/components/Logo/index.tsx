import React from "react";
import styled from "styled-components";
import myImage from "../../assets/image/SLONCH.svg";

const Logo: React.FC = function Logo() {
  return <LogoImage />;
};

export default Logo;

const LogoImage = styled.div`
  position: static;
  width: 160px;
  height: 50px;
  left: 0px;
  top: calc(50% - 50px / 2);
  background-image: url(${myImage});
  background-repeat: no-repeat;
  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 24px;
`;
