import React from "react";
import ModalButton from "./index";

export default {
  component: ModalButton,
  title: "modalButton",
};

export const defaultModalButton = () => (
  <ModalButton btnType="modal_positive">취소</ModalButton>
);
export const falseModalButton = () => (
  <ModalButton btnType="modal_negative">삭제하기</ModalButton>
);
