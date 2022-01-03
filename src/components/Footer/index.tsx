import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router";

const Footer: React.FC = function Footer() {
  const location = useLocation();
  return <StyledFooter path={location.pathname} />;
};
export default Footer;

const StyledFooter = styled.footer<{ path: string }>`
  position: relative;
  height: ${({ path }) => {
    if (path.startsWith("/board")) return "96px";
    return "0px";
  }};

  width: 100vw;
  bottom: 0px;
`;
