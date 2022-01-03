import React from "react";
import SearchBar from "./index";

export default {
  component: SearchBar,
  title: "SearchBar",
};

export const defaultSearchBar = () => {
  return <SearchBar inputName="search" placeholder="검색어를 입력하세요." />;
};
defaultSearchBar.story = {
  name: "default",
};
