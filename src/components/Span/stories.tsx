import React from "react";

import Span from "./index";
import SpanProps from "./_interface";

export default {
  component: Span,
  title: "Span",
};

export const defaultSpan = () => {
  return <Span>defaultSpan</Span>;
};
defaultSpan.story = {
  name: "defaultSpan",
};

const SpanTitleProps: SpanProps = {
  fontWeight: "700",
  fontSize: "24px",
  fontStyle: "normal",
  textAlign: "left",
  lineHeight: "36px",
};

export const titleSpan = () => {
  return (
    <Span
      fontWeight={SpanTitleProps.fontWeight}
      fontSize={SpanTitleProps.fontSize}
      fontStyle={SpanTitleProps.fontStyle}
      lineHeight={SpanTitleProps.lineHeight}
    >
      Log In
    </Span>
  );
};
