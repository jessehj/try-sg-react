import React, { useEffect, useState, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import * as S from "./style";
import MainHeader from "../../components/MainHeader";
import SearchBar from "../../components/SearchBar";
import Posting from "../../components/Posting";

const BoardMain = function BoardMain() {
  const [items, setItems] = useState<number[]>([0, 1, 2, 3]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const [ref, inView] = useInView();

  // 서버에서 받아올 다음 주소의 배열?객체?
  const nextItems = [4, 5, 6, 7];

  const getItems = useCallback(() => {
    setLoading(true);
    // 나중에 여기서 서버 통신 코드를 통해 다음 페이지 값을 가져온 후 배열에 이어붙여주면 된다.
    setItems([...items, ...nextItems]);
    setLoading(false);
  }, [page]);

  useEffect(() => {
    console.log(window.scrollX);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView && !loading) {
      setPage(page + 1);
    }
  }, [inView, loading]);

  useEffect(() => {
    // 첫 실행에 다음페이지 불러오는 일을 방지하는 조건문
    if (page === 0) return;
    getItems();
  }, [page]);

  return (
    <>
      <MainHeader />
      {console.log("render")}
      <S.BoardMainContainer>
        <SearchBar />
        {items.map((item, idx) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <S.PostingCard key={`a${idx}`}>
              {items.length - 1 === idx ? (
                <div ref={ref}>
                  <Posting />
                </div>
              ) : (
                <Posting />
              )}
            </S.PostingCard>
          );
        })}
      </S.BoardMainContainer>
    </>
  );
};

export default BoardMain;
