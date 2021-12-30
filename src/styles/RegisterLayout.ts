import styled from "styled-components";
import { mediaQueries, MOBILE } from "./MediaQuery";
import { GRAY01 } from "./Variables";

export const Base = styled.div`
  display: flex;
  ${mediaQueries(MOBILE)} {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${GRAY01};
  ${mediaQueries(MOBILE)} {
    width: 164px;
    height: 200px;
    margin: 50px auto 50px;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const MainContainer = styled.div`
  width: 320px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mediaQueries(MOBILE)} {
    width: auto;
    padding: 20px;
  }
`;
