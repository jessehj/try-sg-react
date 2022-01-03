import React from "react";
import ReactQuill from "react-quill";
import styled from "styled-components";
import "react-quill/dist/quill.bubble.css";
import Form from "../Form";

import FlexContainer from "../../style/FlexContainer";
import { FROM_TABLET_TO_PHONE, MediaQueries } from "../../style/MediaQueries";

const Editor: React.FC = function Write() {
  return (
    <Form height="100vh">
      <StyledTitleInput
        height="200px"
        name="title"
        placeholder="제목을 입력하세요"
      />
      <FlexContainer>
        <StyledEditor>
          <ReactQuill
            theme="bubble"
            placeholder="여기에 글자를 입력하고 드래그하면 메뉴를 더 볼 수 있어요."
          />
        </StyledEditor>
      </FlexContainer>
    </Form>
  );
};

export default Editor;

const StyledEditor = styled.div`
  margin-top: 96px;
  max-width: 700px;
  width: 90%;
  min-height: 300px;
  font-size: 14px;
  line-height: 23px
  height: 200px;
  background-color: #ffffff;
  text-align: center;
  ${MediaQueries(FROM_TABLET_TO_PHONE)} {
    width: 100%;
    padding: 10px;
    margin-top: 15px;
  }
`;
const StyledTitleInput = styled.input`
  display: flex;
  width: 100%;
  height: 400px;
  align-items: center;
  font-size: 45px;
  justify-content: center;
  background: #fafafa;
  font-weight: 400;
  line-height: 64px;
  text-align: center;
  box-shadow: none;
  border: 0px;
`;
