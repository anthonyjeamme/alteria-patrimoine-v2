import { CSSProperties } from "react";

export type TContentNode =
  | TContentContainerNode
  | TContentBrandNode
  | TContentColumnsNode
  | TContentTextNode
  | TContentBlockNode
  | TContentInternalLinkNode
  | TContentSpreadBlockNode;

export type TContentContainerNode = {
  type: "container";
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

export type TContentTextNode = {
  type: "text";
  value: string;
  style?: CSSProperties;
};

export type TContentBlockNode = {
  type: "block";
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
