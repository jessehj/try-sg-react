import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import QueryString from "qs";
import Section from "../../components/Section";
import FlexContainer from "../../style/FlexContainer";
import BoardCard from "../../components/BoardCard";

import SearchBar from "../../components/SearchBar";
import Modal from "../../components/Modal";
import PageNation from "../../components/PageNation";
import { deletePosts, getPosts, reWritePosts } from "../../network/apis";
import {
  PostsDetailInterface,
  PostsRowsResponseInterface,
} from "../../network/types";

const Board: React.FC = function Board() {
  const location = useLocation();
  const { search } = location;
  const queryData = QueryString.parse(search, { ignoreQueryPrefix: true });

  const [isModal, setModal] = useState(false);
  const initialData: PostsDetailInterface = {
    title: "i",
    id: "",
    contents: "",
    updatedAt: "",
    createdAt: "",
    author: "",
    images: ["", ""],
  };
  const [contents, setContents] = useState([initialData]);
  // const link = nav("/");
  useEffect(() => {
    getPosts({
      page: Number(queryData.page),
      limit: Number(queryData.limit),
      keyword: queryData.keyword as string,
    })
      .then((res) => {
        setContents((res as PostsRowsResponseInterface)?.row);
      })
      .catch((err) => console.log(err));
  }, []);
  const handlePressBoardDelete = async (id: number) => {
    setModal(false);
    const res = await deletePosts(id);
    console.log(res);
  };
  const handlePressBoardRewrite = async (ex: PostsDetailInterface) => {
    setModal(false);
    const res = await reWritePosts(ex);
    console.log(res);
  };
  const handlePressBoardModal = () => setModal(true);
  return (
    <Section top="0px">
      {isModal === true ? <Modal /> : null}
      <FlexContainer
        alignItems="center"
        backgroundColor="#FAFAFA"
        direction="column"
      >
        <SearchBar inputName="search" placeholder="검색어를 입력하세요" />
        <StyledBoardList
          wrap="wrap"
          justifyContent="center"
          margin="0px 0 0 0"
          backgroundColor="#FAFAFA"
        >
          {contents.map((ex) => {
            return (
              <BoardCard
                key={(ex.title as string) + ex.id}
                src={ex.images[0]}
                title={ex.title}
                explain={ex.contents}
                owner={ex.author}
                onDelete={() => handlePressBoardDelete}
                onReWrite={() => handlePressBoardRewrite}
                onClick={() => handlePressBoardModal}
              />
            );
          })}
        </StyledBoardList>
        <PageNation />
      </FlexContainer>
    </Section>
  );
};
export default Board;
const StyledBoardList = styled(FlexContainer)`
  width: 1400px;
  display: inline-flex;
`;
