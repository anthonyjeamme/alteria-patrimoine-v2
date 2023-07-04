import { $createHeadingNode, $createQuoteNode } from "@lexical/rich-text";
import {
  $createParagraphNode,
  SerializedEditorState,
  SerializedLexicalNode,
} from "lexical";

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

export const cleanData = (
  data: SerializedEditorState<SerializedLexicalNode>
) => {
  return {
    root: {
      type: "root",
      children: data.root.children.map(cleanNode),
    },
  };

  return data;
};

export const cleanNode = (node: any) => {
  if (node.type === "text") {
    delete node.version;
    return node;
  }

  if (node.children) {
    node.children = node.children.map(cleanNode);
  }

  delete node.direction;
  if (node.format === "") delete node.format;
  delete node.indent;
  delete node.version;

  return node;
};
