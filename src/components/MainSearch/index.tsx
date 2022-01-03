import React from "react";
import style from "./style";
import { ReactComponent as Search } from "../../assets/images/Search.svg";

const MainSearch = function () {
  return (
    <style.SearchContainer>
      <style.SearchInput type="text" placeholder="검색어를 입력해 주세요" />
      <Search />
    </style.SearchContainer>
  );
};

export default MainSearch;
