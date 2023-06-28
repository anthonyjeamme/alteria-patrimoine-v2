import { TPageData } from "../Page/Page.types";

export type TConnector = {
  getPage: (path: string) => Promise<TPageData>;
  setPage: (path: string, pageData: TPageData) => Promise<void>;
};
