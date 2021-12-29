import React from "react";
import style from "./style";

interface Props {
  title: string;
  text: string;
}

const FixWrite = function ({ title, text }: Props) {
  return (
    <style.UnderWrap>
      <style.ButtonBox>
        <style.TempSave
          type="button"
          onClick={() => {
            localStorage.setItem("title", title);
          }}
        >
          임시저장
        </style.TempSave>
        <style.SaveContent
          type="button"
          onClick={() => {
            localStorage.setItem("text", text);
          }}
        >
          완료
        </style.SaveContent>
      </style.ButtonBox>
    </style.UnderWrap>
  );
};

export default FixWrite;
