import React from "react";

export default interface TextButtonProps {
  texts: TextItem[];
  suffix: string;
}
export interface TextItem {
  text: string;
  onClick?: (e: React.MouseEvent, options?: unknown) => void;
  color?: string;
}
