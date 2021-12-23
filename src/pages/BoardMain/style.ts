import styled from "styled-components";

export const BoardMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  height: auto;
  min-height: 100vh;

  background-color: #fafafa;
  padding-top: 60px;
`;
export const PostingCard = styled.div`
  margin: 12px 0px;
`;
export default {
  BoardMainContainer,
  PostingCard,
};
