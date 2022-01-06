import React from "react";
import NoticeWrapper from "./style";

const Notice = ({
  message,
  isError = true,
}: {
  message: string;
  isError?: boolean;
}) => {
  return <NoticeWrapper isError={isError}>{message}</NoticeWrapper>;
};

export default Notice;
