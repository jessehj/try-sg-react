import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import style from "./style";
import "./quillStyle.css";
import Undermenu from "../../components/FixWrite/index";

const ViewContent = function () {
  const [writeText, setWriteText] = useState<string>("");
  const [writeTitle, setWriteTitle] = useState<string>("");
  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      [{ align: [] }, { color: [] }, { background: [] }],
      ["clean"],
    ],
  };
  const formats = [
    "font",
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "color",
    "background",
  ];

  return (
    <style.ViewContainer>
      <style.InputTitleContainer>
        <style.TitleInput
          type="text"
          placeholder="제목을 입력하세요."
          onChange={(e) => {
            setWriteTitle(e.target.value);
          }}
        />
      </style.InputTitleContainer>
      <style.QuillBoxWrap>
        <style.QuillBox>
          <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
            onChange={(content, delta, source, editor) =>
              setWriteText(editor.getHTML())
            }
            placeholder="내용을 입력하세요"
          />
        </style.QuillBox>
      </style.QuillBoxWrap>
      <Undermenu title={writeTitle} text={writeText} />
    </style.ViewContainer>
  );
};
export default ViewContent;
