import React from "react";
import { StyledTextButton, TextButtonGroup } from "./styles";
import TextButtonProps from "./_interface";

const TextButton: React.FC<TextButtonProps> = function TextButton({
  texts,
  suffix,
}) {
  return (
    <TextButtonGroup>
      {texts.map((text, index) => {
        if (index !== texts.length - 1)
          return (
            <StyledTextButton
              text={text.text}
              onClick={text.onClick}
              color={text.color}
              key={String(index).concat(text.text) + text.text}
            >
              {`${text.text}${suffix}`}
            </StyledTextButton>
          );
        return (
          <StyledTextButton
            text={text.text}
            onClick={text.onClick}
            color={text.color}
            key={String(index).concat(text.text)}
          >
            {text.text}
          </StyledTextButton>
        );
      })}
    </TextButtonGroup>
  );
};
export default TextButton;
