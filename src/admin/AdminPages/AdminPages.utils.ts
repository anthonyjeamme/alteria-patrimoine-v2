/**
 *
 */
export const groupPages = (
  pages: { id: string; path: string }[]
): TGroupPage[] => {
  const groupPaths = Array.from(
    new Set(
      pages
        .filter((page) => page.path.split("/").length > 2)
        .map((page) => page.path.split("/")[1])
    )
  ).filter((p) => !!p);

  return groupPaths.map((name) => ({
    name,
    pages: pages.filter((page) => page.path.startsWith(`/${name}`)),
  }));
};

export type TGroupPage = {
  name: string;
  pages: { id: string; path: string }[];
};
