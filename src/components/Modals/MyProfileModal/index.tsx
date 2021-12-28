import React, { useEffect, useRef } from "react";
import * as S from "./style";

interface Props {
  handleModal: (status: boolean) => void;
}

const MyProfileModal: React.FC<Props> = function ({ handleModal }) {
  const modalEl = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent): void => {
    if (modalEl.current && !modalEl.current?.contains(e.target as Node)) {
      handleModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalEl]);

  return (
    <S.ModalContainer ref={modalEl}>
      <S.ListContainer>
        <S.Lists>내 정보</S.Lists>
      </S.ListContainer>
      <S.ListContainer>
        <S.Lists>로그아웃</S.Lists>
      </S.ListContainer>
    </S.ModalContainer>
  );
};

export default MyProfileModal;
