import React from "react";
import styled from "styled-components";
import FlexContainer from "../../style/FlexContainer";
import LeftArrowIcon from "../../assets/icon/LeftArrow.svg";
import RightArrowIcon from "../../assets/icon/RightArrow.svg";
import PageIcon from "./PageIcon";
import PageNumber from "./PageNumber";
import { FROM_TABLET_TO_PHONE, MediaQueries } from "../../style/MediaQueries";

const PageNation: React.FC = function PageNation() {
  return (
    <StyledPageNation
      direction="row"
      justifyContent="space-around"
      wrap="nowrap"
    >
      <PageIcon src={LeftArrowIcon} />
      <PageNumber isNowPage>1</PageNumber>
      <PageNumber color="#B0CBFB">2</PageNumber>
      <PageNumber color="#B0CBFB">2</PageNumber>
      <PageNumber color="#B0CBFB">2</PageNumber>
      <PageNumber color="#B0CBFB">2</PageNumber>
      <PageNumber color="#B0CBFB">2</PageNumber>

      <PageIcon src={RightArrowIcon} />
    </StyledPageNation>
  );
};
export default PageNation;
const StyledPageNation = styled(FlexContainer)`
  max-width: 580px;
  min-width: 320px;
  width: 100vw;
  margin: 24px 96px;
  ${MediaQueries(FROM_TABLET_TO_PHONE)} {
    width: 300px;
  }
`;
