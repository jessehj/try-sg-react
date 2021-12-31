import React from "react";
import styled from "styled-components";

import Post from "../../components/Post/Post";
import { GRAY05 } from "../../styles/Variables";
import { mediaQueries, MOBILE } from "../../styles/MediaQuery";

const MainPage = function MainPage() {
  return (
    <Base>
      <SearchContainer>
        <SearchInput placeholder="검색어를 입력해 주세요." />
        <SearchIcon src="icons/search-icon.svg" />
      </SearchContainer>
      <PostContainer>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </PostContainer>
      <PagingContainer>1 2 3</PagingContainer>
    </Base>
  );
};

export default MainPage;

const Base = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mediaQueries(MOBILE)} {
    margin-top: 60px;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  margin: 96px auto;
  ${mediaQueries(MOBILE)} {
    margin: 32px 0;
    z-index: 1;
  }
`;

const SearchInput = styled.input`
  width: 792px;
  padding: 15px 25px;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
  background-color: transparent;
  &::placeholder {
    color: ${GRAY05};
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  }
  @media (max-width: 1080px) {
    width: 90vw;
  }
  ${mediaQueries(MOBILE)} {
    width: 90vw;
    padding: 10px 30px 10px 15px;
  }
`;

const SearchIcon = styled.img`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

const PostContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 20px;
  margin-bottom: 192px;
  @media (max-width: 1440px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
  @media (max-width: 1080px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
  ${mediaQueries(MOBILE)} {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

const PagingContainer = styled.div`
  margin-bottom: 104px;
  ${mediaQueries(MOBILE)} {
    margin: 40px 0;
  }
`;
