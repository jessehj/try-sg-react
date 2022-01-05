import React, { useMemo, useRef } from "react";
import ReactQuill from "react-quill";
import styled from "styled-components";
import "react-quill/dist/quill.bubble.css";

import { AxiosError } from "axios";
import Form from "../Form";

import FlexContainer from "../../style/FlexContainer";
import { FROM_TABLET_TO_PHONE, MediaQueries } from "../../style/MediaQueries";
import { uploadFiles } from "../../network/apis";

const Editor: React.FC = function Write() {
  const editorRef = useRef<ReactQuill>();
  const imageHandler = async () => {
    const input = document.createElement("input");

    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    // eslint-disable-next-line consistent-return
    input.onchange = async () => {
      if (input.files) {
        const file: any = input.files[0];
        const formData = new FormData();

        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        formData.append("image", file);

        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
        try {
          const res: unknown = await uploadFiles(formData);

          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/ban-ts-comment
          // @ts-ignore
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call
          const { url } = res.data.row;

          const range = editorRef.current?.getEditor().getSelection()?.index;
          if (range !== null && range !== undefined) {
            const quill = editorRef.current?.getEditor();
            quill?.setSelection(range, 1);
            quill?.clipboard.dangerouslyPasteHTML(
              range,
              // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
              `<img src=${url} alt="image"/>`
            );
          }
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          return { ...res, success: true };
        } catch (error) {
          const err = error as AxiosError;
          return { ...err.response, success: false };
        }
      }
    };
    return "none";
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, null] }],

          ["bold", "italic", "strike"],
          [{ align: null }, { align: "center" }, { align: "right" }],
          [{ list: "ordered" }, { list: "check" }, { list: "bullet" }],
          ["image", "video"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    []
  );
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
            ref={(el) => {
              if (el !== null) editorRef.current = el;
            }}
            theme="bubble"
            placeholder="여기에 글자를 입력하고 드래그하면 메뉴를 더 볼 수 있어요."
            modules={modules}
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
  &::placeholder {
    font-size: 14px;
    line-height: 23px;
    color: #888888;
    font-style: normal;
    font-weight: 400;
    font-family: Not Sans CJK KR;
  }

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
