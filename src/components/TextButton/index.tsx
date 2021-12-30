import React from "react";
import { StyledTextButton, TextButtonGroup } from "./styles";
import TextButtonProps from "./interface";

const TextButton: React.FC<TextButtonProps> = function TextButton({
  texts,
  suffix,
}) {
  return (
    <TextButtonGroup>
      {texts.map((text, index) => {
        if (index !== texts.length - 1)
          return <StyledTextButton>{`${text}${suffix}`}</StyledTextButton>;
        return <StyledTextButton color="#397EF6">{text} </StyledTextButton>;
      })}
    </TextButtonGroup>
  );
};
export default TextButton;
