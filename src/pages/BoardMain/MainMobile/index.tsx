import React, { useEffect, useState, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import * as S from "../style";
import MainHeader from "../../../components/MainHeader";
import SearchBar from "../../../components/SearchBar";
import Posting from "../../../components/Posting";
import DeleteModal from "../../../components/Modals/DeleteModal";

const MainMobile = function () {
  const [modal, handleModal] = useState<boolean>(false);
  const [items, setItems] = useState<number[]>([1]);
  const [page, setPage] = useState(0);
  const [ref, inView] = useInView();

  // 서버에서 받아올 다음 주소의 배열?객체?
  const nextItems = [4, 5, 6, 7];

  const handleDeleteModal = (status: boolean) => {
    handleModal(status);
    document.body.style.overflow = "unset";
  };

  const getItems = useCallback(() => {
    // 나중에 여기서 서버 통신 코드를 통해 다음 페이지 값을 가져온 후 배열에 이어붙여주면 된다.
    setItems([...items, ...nextItems]);
  }, [page]);

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView) {
      setPage(page + 1);
      getItems();
    }
  }, [inView]);

  return (
    <>
      <MainHeader />
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
                  {items.length - 1 === idx ? (
                    <div ref={ref}>
                      <Posting handleDeleteModal={handleModal} />
                    </div>
                  ) : (
                    <Posting handleDeleteModal={handleModal} />
                  )}
                </S.PostingCard>
              );
            })}
          </S.PostingContents>
        </S.PostingContainer>
      </S.BoardMainContainer>
      {modal && (
        <DeleteModal handleDeleteModal={handleDeleteModal} modal={modal} />
      )}
    </>
  );
};

export default MainMobile;
