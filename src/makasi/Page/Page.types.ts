import { TSectionData } from "../Section/Section.types";
import { TContentNode } from "../Content/Content.types";

export type TDatabasePageData = {
  footerId: string | null;
  sections: TSectionData[];
  metadata: TPageMetadata;

  //
  navigationBarId: string | null;
};

export type TPageData = {
  id: string;
  slug: string;
  public: boolean;
  sections: TSectionData[];
  metadata: TPageMetadata;

  //
  navigationBar?: TNavigationbarData;
  footer?: TFooterData;
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
  slug: string;
  metadata: TPageMetadata;
};
