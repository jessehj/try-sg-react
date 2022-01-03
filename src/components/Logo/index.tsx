import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import myImage from "../../assets/image/SLONCH.svg";
import { handleClick } from "../../handlers";
import { LingToWelcome } from "../../nav";

const Logo: React.FC<{ height?: string }> = function Logo({ height }) {
  const nav = useNavigate();
  const handleNavToWelcome = function handleNavToWelcome(e: React.MouseEvent) {
    handleClick(e, () => LingToWelcome(nav));
  };
  return <LogoImage height={height} onClick={(e) => handleNavToWelcome(e)} />;
};

export default Logo;

const LogoImage = styled.div<{ height?: string }>`
  position: static;
  width: 160px;
  height: ${({ height }) => {
    if (height) return height;
    return "100%";
  }};
  left: 0px;
  top: calc(50% - 50px / 2);
  background-image: url(${myImage});
  background-repeat: no-repeat;
  /* Inside Auto Layout */
  background-size: contain;
  cursor: pointer;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 24px;
`;
