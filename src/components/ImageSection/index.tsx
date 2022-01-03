import React from "react";
import styled from "styled-components";
import Saly from "../../assets/image/Saly-22.svg";
import FlexContainer, { FlexContainerProps } from "../../style/FlexContainer";
import { FROM_TABLET_TO_PHONE, MediaQueries } from "../../style/MediaQueries";

const Props: FlexContainerProps = {
  width: "50%",
  backgroundColor: "#FAFAFA",
  direction: "column",
};
interface SalyProps {
  mobile?: boolean;
}
const ImageSection: React.FC<SalyProps> = function ImageSection({ mobile }) {
  return (
    <LoginImageWrap mobile={mobile}>
      <LoginImage />
    </LoginImageWrap>
  );
};

const LoginImageWrap = styled(FlexContainer)`
  height: 100vh;
  width: ${Props.width};
  flex-direction: ${Props.direction};
  background-color: ${Props.backgroundColor};
  ${MediaQueries(FROM_TABLET_TO_PHONE)} {
    height: 320px;
    width: 320px;
  }
`;
const LoginImage = styled.div`
  background-image: url(${Saly});
  width: 80%;
  height: 80%;
  min-height: 200px;
  min-width: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  ${MediaQueries(FROM_TABLET_TO_PHONE)} {
    width: 270px;
    height: 270px;
    margin-top: 35px;
    margin-bottom: 35px;
  } ;
`;
export default ImageSection;
