import React, { useEffect } from "react";
import * as S from "./style";
import { ReactComponent as DangerIcon } from "../../../assets/danger.svg";

interface Props {
  modal: boolean;
  handleDeleteModal: (status: boolean) => void;
}

const DeleteModal: React.FC<Props> = function ({ modal, handleDeleteModal }) {
  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    }
  }, []);

  return (
    <S.AbsoluteContainer>
      <S.AlertContainer className="alertContainer">
        <S.AlertContent>
          <DangerIcon />
          <S.TextContainer>
            삭제된 글은 복구가 불가능합니다. <br /> 글을 삭제하시겠습니까?
          </S.TextContainer>
        </S.AlertContent>
        <S.ButtonContainer>
          <S.CancelBtn onClick={() => handleDeleteModal(false)}>
            취소하기
          </S.CancelBtn>
          <S.DeleteBtn onClick={() => handleDeleteModal(false)}>
            삭제하기
          </S.DeleteBtn>
        </S.ButtonContainer>
      </S.AlertContainer>
    </S.AbsoluteContainer>
  );
};

export default DeleteModal;
