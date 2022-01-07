import React from "react";
import ReactDOM from "react-dom";
import styled, { css, keyframes } from "styled-components";
import { CustomButton } from "../../styles/CustomButton";
import { BLUE01, GRAY02, GRAY05, GRAY06 } from "../../styles/Variables";
import { mediaQueries, MOBILE } from "../../styles/MediaQuery";

const ModalPortal: React.FC = function ModalPortal({ children }) {
  const el: HTMLElement = document.getElementById("modal")!;
  return ReactDOM.createPortal(children, el);
};

interface Props {
  width?: string;
  height?: string;
  onClose?: () => void;
}

const Modal = function Modal({ width, height, onClose }: Props) {
  return (
    <ModalPortal>
      <ModalBackDrop onClick={onClose} />
      <ModalContainer width={width} height={height}>
        <ModalIcon src="icons/danger-icon.svg" />
        <ModalTitle>삭제된 글은 복구가 불가능합니다.</ModalTitle>
        <ModalTitle>정말 삭제하시겠습니까?</ModalTitle>
        <ModalButtonContainer>
          <CancelButton onClick={onClose}>취소하기</CancelButton>
          <DeleteButton>삭제하기</DeleteButton>
        </ModalButtonContainer>
      </ModalContainer>
    </ModalPortal>
  );
};

export default Modal;

const ModalBackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99;
`;

const ModalAnimation = keyframes`
0%{
  top: 42%;
  opacity: 0;
}
100%{
  top: 40%;
  opacity: 1;
}`;

const ModalContainer = styled.div<{ width?: string; height?: string }>`
  position: fixed;
  top: 40%;
  left: 50%;
  ${({ width }) =>
    css`
      width: ${width};
    `};
  ${({ height }) =>
    css`
      height: ${height};
    `};
  animation: ${ModalAnimation} 0.25s linear;
  transform: translateX(-50%);
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
  ${mediaQueries(MOBILE)} {
    width: 264px;
    height: 180px;
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.2);
  }
`;

const ModalIcon = styled.img`
  width: 26px;
  height: 26px;
  margin-top: 26px;
  margin-bottom: 15px;
`;

const ModalTitle = styled.div`
  font-size: 14px;
  color: ${GRAY06};
  line-height: 20px;
  font-weight: 400;
`;

const ModalButtonContainer = styled.div`
  display: flex;
  margin-top: 24px;
  ${mediaQueries(MOBILE)} {
    width: 100%;
    height: 100%;
  }
`;

const CancelButton = styled(CustomButton)`
  width: 80px;
  height: 40px;
  border: 1px solid ${GRAY05};
  color: ${GRAY05};
  background-color: #fff;
  margin-right: 20px;
  cursor: pointer;
  ${mediaQueries(MOBILE)} {
    width: 50%;
    border: 1px solid ${GRAY02};
    font-size: 12px;
    border-radius: 0;
    border-bottom-left-radius: 8px;
    border-left: none;
    margin-right: 0;
    height: 100%;
  }
`;

const DeleteButton = styled(CustomButton)`
  width: 80px;
  height: 40px;
  cursor: pointer;
  ${mediaQueries(MOBILE)} {
    width: 50%;
    border: 1px solid ${GRAY02};
    background-color: #fff;
    color: ${BLUE01};
    font-size: 12px;
    border-radius: 0;
    border-right: none;
    height: 100%;
    border-bottom-right-radius: 8px;
  }
`;
