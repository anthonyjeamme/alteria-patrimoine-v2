import { TSectionData } from "../Section/Section.types";
import { TContentNode } from "../Content/Content.types";

export type TPageData = {
  navigationBar?: TNavigationbarData;
  footer?: TFooterData;
  sections: TSectionData[];
};

export type TNavigationbarData = {
  // TODO
};

export type TFooterData = {
  content: TContentNode[];
};
