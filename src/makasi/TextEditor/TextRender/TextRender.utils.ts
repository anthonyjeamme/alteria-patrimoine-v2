import { CSSProperties } from "react";

const IS_BOLD = 1;
const IS_ITALIC = 1 << 1;
const IS_STRIKETHROUGH = 1 << 2;
const IS_UNDERLINE = 1 << 3;

export const getBlockFormatStyle = (node: any) => {
  const style: CSSProperties = {
    textAlign: node.format,
  };

  return style;
};

export const getFormattingStyle = (format: number) => {
  const style: CSSProperties = {};

  if (format & IS_BOLD) style.fontWeight = 700;
  if (format & IS_ITALIC) style.fontStyle = "italic";
  if (format & IS_STRIKETHROUGH) style.textDecoration = "line-through";
  if (format & IS_UNDERLINE) style.textDecoration = "underline";

  return style;
};
