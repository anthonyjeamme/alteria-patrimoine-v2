import { CSSProperties } from "react";

export type TContentNode =
  | TContentContainerNode
  | TContentBrandNode
  | TButtonNode
  | TDividerNode
  | TBoxNode
  | TListNode
  | TListItemNode
  | TContentColumnsNode
  | TContentTextNode
  | TParagraphNode
  | TContentBlockNode
  | TContentInternalLinkNode
  | TContentSpreadBlockNode;

export type TContentContainerNode = {
  type: "container";
  maxWidth?: number;
  size: "small" | "medium" | "large";
  children: TContentNode[];
  style?: CSSProperties;
};

export type TContentBrandNode = { type: "brand"; style?: CSSProperties };
export type TContentColumnsNode = {
  type: "columns";
  columns: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  children: TContentNode[];
  style?: CSSProperties;
};

export type TDividerNode = { type: "divider" };

export type TContentTextNode = {
  type: "text";
  value: string;
  style?: CSSProperties;
};

export type TParagraphNode = {
  type: "paragraph";
  children: TContentNode[];
  style?: CSSProperties;
};

export type TContentBlockNode = {
  type: "block";
  children: TContentNode[];
  style?: CSSProperties;
};

export type TButtonNode = {
  type: "button";
  theme?: "primary";
  action: TAction;
  children: TContentNode[];
  style?: CSSProperties;
};

export type TBoxNode = {
  type: "box";
  children: TContentNode[];
  style?: CSSProperties;
};

export type TListNode = {
  type: "list";
  children: TListItemNode[];
  style?: CSSProperties;
};

export type TListItemNode = {
  type: "list-item";
  children: TContentNode[];
  style?: CSSProperties;
};

export type TContentInternalLinkNode = {
  type: "internal-link";
  pathname: string;
  text: string;
  style?: CSSProperties;
};

export type TContentSpreadBlockNode = {
  type: "spread-block";
  children: TContentNode[];
  style?: CSSProperties;
};

export type TAction = TInternalLinkAction | TExternalLinkAction;

export type TInternalLinkAction = {
  type: "internal-link";
  pathname: string;
};

export type TExternalLinkAction = {
  type: "external-link";
  href: string;
};
