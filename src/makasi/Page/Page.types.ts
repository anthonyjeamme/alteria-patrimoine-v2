import { TSectionData } from "../Section/Section.types";
import { TContentNode } from "../Content/Content.types";

export type TDatabasePageData = {
  navigationBarId: string | null;
  footerId: string | null;
  sections: TSectionData[];
  metadata: TPageMetadata;
};

export type TPageData = {
  id: string;
  path: string;
  navigationBar?: TNavigationbarData;
  footer?: TFooterData;
  sections: TSectionData[];
  metadata: TPageMetadata;
};

export type TNavigationbarData = any;

export type TFooterData = {
  nodes: TContentNode[];
};

export type TPageMetadata = {
  title: string;
  description: string;
};

export type TPagePath = {
  id: string;
  path: string;
};
