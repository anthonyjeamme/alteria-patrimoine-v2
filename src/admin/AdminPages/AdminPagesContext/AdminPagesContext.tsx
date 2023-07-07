import { TPageData } from "@/makasi/core/Page/Page.types";
import {
  FC,
  Dispatch,
  useState,
  ReactNode,
  useContext,
  createContext,
  SetStateAction,
} from "react";

import { clientConnector } from "@/makasi/client";

const adminPagesContext = createContext<{
  pages: TPageData[];
  setPages: Dispatch<SetStateAction<TPageData[]>>;
}>({
  pages: [],
  setPages: () => undefined,
});

interface IAdminPagesContextProps {
  pages: TPageData[];
  children: ReactNode;
}

export const useAdminPagesContext = () => {
  const { pages, setPages } = useContext(adminPagesContext);

  return {
    pages,
    createPage: async (data: Partial<TPageData>) => {
      const page = await clientConnector.createPage(data);
      setPages((pages) => [...pages, page]);
    },
    updatePage: async (id: string, data: Partial<TPageData>) => {
      const { page: updatedPage } = await clientConnector.updatePage(id, data);

      setPages((pages) =>
        pages.map((page) => (page.id === id ? updatedPage : page))
      );
    },
    deletePage: async (id: string) => {
      try {
        await clientConnector.deletePage(id);
        setPages(pages.filter((page) => page.id !== id));
      } catch {
        //
      }
    },
  };
};

export const AdminPagesContext: FC<IAdminPagesContextProps> = ({
  pages: initPages,
  children,
}) => {
  const [pages, setPages] = useState(initPages);

  return (
    <adminPagesContext.Provider value={{ pages, setPages }}>
      {children}
    </adminPagesContext.Provider>
  );
};

export const withAdminPagesContext =
  (Component: FC<{}>) =>
  ({ pagePaths }: { pagePaths: TPageData[] }) => {
    return (
      <AdminPagesContext pages={pagePaths}>
        <Component />
      </AdminPagesContext>
    );
  };
