import React from "react";

export const handleClick = (e: React.MouseEvent, func: () => void) => {
  e.preventDefault();
  func();
};
export const handleChange = (e: React.ChangeEvent, func: () => void) => {
  e.preventDefault();
  func();
};
