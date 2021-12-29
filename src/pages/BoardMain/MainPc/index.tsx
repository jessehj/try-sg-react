import React, { useState, useEffect } from "react";
import * as S from "../style";
import MainHeader from "../../../components/MainHeader";
import SearchBar from "../../../components/SearchBar";
import Posting from "../../../components/Posting";
import Pagination from "../Pagination";
import DeleteModal from "../../../components/Modals/DeleteModal";

const MainPc = function () {
  const [modal, handleModal] = useState<boolean>(false);
  const [toggle, handleToggle] = useState<boolean>(false);
  const [items, setItems] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  ]);
  const [current, setCurrent] = useState(1);

  const handleDeleteModal = (status: boolean) => {
    handleModal(status);
    document.body.style.overflow = "unset";
  };
  const handleMenuModal = (status: boolean) => {
    handleToggle(status);
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    console.log(
      "여기서 current 값을 기준으로 백엔드에 page 에 해당하는 data 요청 코드 작성",
      current
    );
    if (current === 2) {
      setItems([11, 12, 13, 14, 15, 16, 17]);
    }
    if (current === 3) {
      setItems([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    }
  }, [current]);

  return (
    <S.Container>
      <MainHeader handleMenuToggle={handleMenuModal} toggle={toggle} />
      <S.BoardMainContainer>
        <S.SearchBarContainer>
          <SearchBar />
        </S.SearchBarContainer>
        <S.PostingContainer>
          <S.PostingContents>
            {items.map((item, idx) => {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <S.PostingCard key={`a${idx}`}>
                  <Posting handleDeleteModal={handleDeleteModal} />
                </S.PostingCard>
              );
            })}
          </S.PostingContents>
        </S.PostingContainer>
        <S.PaginationContainer>
          <Pagination count={10} current={setCurrent} />
        </S.PaginationContainer>
      </S.BoardMainContainer>
      {modal && (
        <DeleteModal handleDeleteModal={handleDeleteModal} modal={modal} />
      )}
    </S.Container>
  );
};

export default MainPc;
