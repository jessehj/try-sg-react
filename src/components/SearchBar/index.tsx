import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/search_Icon.svg";
import * as S from "./style";

const SearchBar = function SearchBar() {
  return (
    <S.SearchBarContainer>
      <S.InputBox type="text" placeholder="검색어를 입력해 주세요." />
      <SearchIcon style={{ marginRight: "16px", cursor: "pointer" }} />
    </S.SearchBarContainer>
  );
};

export default SearchBar;
