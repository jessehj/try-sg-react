import React from "react";
import * as S from "./style";
import MainHeader from "../../components/MainHeader";
import SearchBar from "../../components/SearchBar";
import Posting from "../../components/Posting";

const BoardMain = function BoardMain() {
  const tempList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <>
      <MainHeader />
      <S.BoardMainContainer>
        <SearchBar />
        {tempList.map(() => {
          return (
            <S.PostingCard>
              <Posting />
            </S.PostingCard>
          );
        })}
      </S.BoardMainContainer>
    </>
  );
};

export default BoardMain;
