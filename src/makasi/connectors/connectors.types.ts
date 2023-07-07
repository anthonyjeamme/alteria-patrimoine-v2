import { TPageData } from "../core/Page/Page.types";

export interface DataConnector {
  getPublicPage(slug: string): Promise<TPageData | null>;
  getPage(id: string): Promise<TPageData | null>;
  listPages(): Promise<TPageData[]>;
  createPage(pageData: Partial<TPageData>): Promise<TPageData | null>;
  updatePage(
    id: string,
    pageData: Partial<TPageData>
  ): Promise<TPageData | null>;
  deletePage(id: string): Promise<number>;
}
