import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  max-width: 792px;
  height: 30px;

  border-bottom: 1px solid #000000;

  margin: 40px 0px;
`;

export const InputBox = styled.input`
  width: auto;
  height: 24px;
  min-width: 160px;
  max-width: 770px;

  border: none;
  padding-left: 10px;

  font-size: 16px;
  color: #888888;
  background-color: inherit;
  outline: none;
`;

export default {
  SearchBarContainer,
  InputBox,
};
