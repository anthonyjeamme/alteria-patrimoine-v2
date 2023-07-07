export type TLexicalDocument = {
  root: {
    type: "root";
    children: TLexicalTopLevelNode[];
  };
};

export type TLexicalTopLevelNode =
  | TParagraphNode
  | THeadingNode
  | TQuoteNode
  | TListNode;

type TParagraphNode = {
  type: "paragraph";
  children: TLexicalNode[];
};

type THeadingNode = {
  type: "heading";
  children: TLexicalNode[];
  tag: "h1" | "h2" | "h3" | "h4" | "h5";
};

type TQuoteNode = {
  type: "quote";
  children: TLexicalNode[];
};

type TListNode = {
  type: "list";
  children: TLexicalNode[];
};

export type TLexicalNode =
  | TLexicalText
  | TLexicalListItem
  | TLexicalLineBreak
  | TLexicalLinkNode;

type TLexicalText = {
  type: "text";
  format: number;
  text: string;
};

type TLexicalListItem = {
  type: "listitem";
  children: TLexicalNode[];
  format: number;
};

type TLexicalLineBreak = {
  type: "linebreak";
};

type TLexicalLinkNode = {
  type: "link";
  url: string;
  children: TLexicalNode[];
  rel: string;
};
