import React from "react";
import styled from "styled-components";
import DangerIcon from "../../assets/icon/danger.svg";
import FlexContainer from "../../style/FlexContainer";
import { DisabledDiv, StyledModal } from "./styles";
import ModalButton from "./ModalButton";
import Span from "../Span";

const Modal: React.FC = function Modal() {
  return (
    <DisabledDiv>
      <StyledModal>
        <StyledIconLayout />
        <StyledSpanLayout>
          <Span
            fontWeight="400"
            fontSize="14px"
            lineHeight="20px"
            textAlign="center"
          >
            삭제된 글은 복구가 불가능합니다. 글을 삭제하시겠습니까?
          </Span>
        </StyledSpanLayout>
        <StyledButtonLayout>
          <FlexContainer wrap="nowrap" width="100%" alignItems="flex-start">
            <ModalButton btnType="modal_positive">취소</ModalButton>
            <StyledVr />
            <ModalButton btnType="modal_negative">삭제하기</ModalButton>
          </FlexContainer>
        </StyledButtonLayout>
      </StyledModal>
    </DisabledDiv>
  );
};
export default Modal;
const StyledVr = styled.div`
  background-color: #fafafa;
  width: 1px;
  height: 40px;
  text-align: center;
`;
const StyledSpanLayout = styled.div`
  position: absolute;
  width: 194px;
  height: 40px;
  bottom: 72px;
  text-align: center;
`;
const StyledButtonLayout = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0px;
  background-color: #fafafa;
`;
const StyledIconLayout = styled.div`
  position: absolute;
  top: 26.7px;
  width: 26.7px;
  height: 26.7px;
  background-image: url(${DangerIcon});
  background-repeat: no-repeat;
  background-size: contain;
`;
