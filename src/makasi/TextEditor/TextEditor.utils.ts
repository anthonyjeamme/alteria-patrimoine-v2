import { $createHeadingNode, $createQuoteNode } from "@lexical/rich-text";
import { $createParagraphNode } from "lexical";

import { $createListNode } from "@lexical/list";

export type TTagName =
  | "h1"
  | "h2"
  | "h3"
  | "p"
  | "quote"
  | "bullet-list"
  | "ordered-list";

export const createNode = (tag: TTagName) => {
  const node =
    tag === "bullet-list"
      ? $createListNode("bullet")
      : tag === "ordered-list"
      ? $createListNode("number")
      : tag === "quote"
      ? $createQuoteNode()
      : tag === "p"
      ? $createParagraphNode()
      : tag === "h1"
      ? $createHeadingNode("h1")
      : tag === "h2"
      ? $createHeadingNode("h2")
      : tag === "h3"
      ? $createHeadingNode("h3")
      : null;

  return node;
};
