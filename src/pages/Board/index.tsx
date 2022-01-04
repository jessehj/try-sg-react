import React from "react";
import styled from "styled-components";
import Section from "../../components/Section";
import FlexContainer from "../../style/FlexContainer";
import BoardCard from "../../components/BoardCard";
import BoardCardProps from "../../components/BoardCard/_interface";
import SearchBar from "../../components/SearchBar";
import exImg from "../../assets/image/tnExample1.svg";
import PageNation from "../../components/PageNation";

const Board: React.FC = function Board() {
  const exarr = new Array<BoardCardProps>(30);
  exarr.fill({
    title: "안녕하세요 반갑습니다.",
    explain: "예시 설명입니다. ",
    owner: "로그인한 민기",
  });
  return (
    <Section top="60px">
      <StyledBoardList alignItems="flex-start" backgroundColor="#FAFAFA">
        <SearchBar inputName="search" placeholder="검색어를 입력하세요" />
        <FlexContainer wrap="wrap" justifyContent="center" margin="100px 0 0 0">
          {exarr.map((ex) => {
            const random = Math.random() * 2;

            return (
              <BoardCard
                src={random < 1 ? exImg : undefined}
                title={ex.title}
                explain={ex.explain}
                owner={random < 1 ? ex.owner : "민기"}
              />
            );
          })}
        </FlexContainer>
        <PageNation />
      </StyledBoardList>
    </Section>
  );
};
export default Board;
const StyledBoardList = styled(FlexContainer)``;
