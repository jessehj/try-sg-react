import React from "react";
import styled from "styled-components";
import Saly from "../../assets/image/Saly-22.svg";
import FlexContainer, { FlexContainerProps } from "../../style/FlexContainer";

const Props: FlexContainerProps = {
  width: "50%",
  backgroundColor: "#FAFAFA",
  direction: "column",
};

const ImageSection: React.FC = function ImageSection() {
  return (
    <FlexContainer
      direction={Props.direction}
      backgroundColor={Props.backgroundColor}
      width={Props.width}
    >
      <LoginImage />
    </FlexContainer>
  );
};

const LoginImage = styled.div`
  background-image: url(${Saly});
  width: 70%;
  height: 70%;
  background-size: contain;
  background-repeat: no-repeat;
`;
export default ImageSection;
