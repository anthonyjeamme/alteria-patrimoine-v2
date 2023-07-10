import { CSSProperties } from "react";
import { TStyle } from "../editors/StyleEditor/StyleEditor.types";

export type TContentNode<
  T =
    | TImageNode
    | TContentContainerNode
    | TContentComponentNode
    | TContentBrandNode
    | TSliderNode
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
    | TContentSpreadBlockNode
> = { id: string } & T;

export type TImageNode = {
  type: "image";
  url: string;
  style?: TStyle;
};

export type TSliderNode = {
  type: "slider";
  children: TContentNode[];
  style?: TStyle;
};

export type TContentContainerNode = {
  type: "container";
  maxWidth?: number;
  size: "small" | "medium" | "large";
  children: TContentNode[];
  style?: TStyle;
};

export type TContentComponentNode = {
  type: "component";
  componentId: string;
  componentData: any;
  componentParams: any;
  children?: TContentNode[];
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
  style?: TStyle;
};

export type TDividerNode = { type: "divider"; style?: TStyle };

export type TContentTextNode = {
  type: "text";
  value: any;
  style?: TStyle;
};

export type TParagraphNode = {
  type: "paragraph";
  children: TContentNode[];
  style?: TStyle;
};

export type TContentBlockNode = {
  type: "block";
  children: TContentNode[];
  style?: TStyle;
};

export type TButtonNode = {
  type: "button";
  theme?: "primary";
  action: TAction;
  children: TContentNode[];
  style?: TStyle;
};

export type TBoxNode = {
  type: "box";
  children: TContentNode[];
  style?: TStyle;
};

export type TListNode = {
  type: "list";
  children: TListItemNode[];
  style?: TStyle;
};

export type TListItemNode = {
  type: "list-item";
  children: TContentNode[];
  style?: TStyle;
};

export type TContentInternalLinkNode = {
  type: "internal-link";
  pathname: string;
  text: string;
  style?: TStyle;
};

export type TContentSpreadBlockNode = {
  type: "spread-block";
  children: TContentNode[];
  style?: TStyle;
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
