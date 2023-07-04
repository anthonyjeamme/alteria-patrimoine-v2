import { TContentNode } from "../Content/Content.types";
import { TPageData, TPagePath } from "../Page/Page.types";

export type TConnector = {
  getPagePaths: () => Promise<TPagePath[]>;
  getPage: (path: string) => Promise<TPageData | null>;
  setPage: (path: string, pageData: TPageData) => Promise<TPageData | null>;
  getComponent: (id: string) => Promise<TComponentData | null>;
  createComponent: (componentData: any) => Promise<TComponentData | null>;
  updateComponent: (
    id: string,
    componentData: TComponentData
  ) => Promise<TComponentData | null>;
};

export type TComponentData = {
  id: string;
  nodes: TContentNode[];
};
