/**
 *
 */
export const groupPages = (
  pages: { id: string; slug: string }[]
): TGroupPage[] => {
  const groupPaths = Array.from(
    new Set(
      pages
        .filter((page) => page.slug.split("/").length > 2)
        .map((page) => page.slug.split("/")[1])
    )
  ).filter((p) => !!p);

  return groupPaths.map((name) => ({
    name,
    pages: pages.filter((page) => page.slug.startsWith(`/${name}`)),
  }));
};

export type TGroupPage = {
  name: string;
  pages: { id: string; slug: string }[];
};
