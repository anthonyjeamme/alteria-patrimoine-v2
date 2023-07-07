import { TPagePreset } from "./AdminPages";

/**
 *
 */
export const groupPages = (
  pages: { id: string; slug: string }[],
  groupPresets: TPagePreset[]
): TGroupPage[] => {
  const groupPaths = Array.from(
    new Set([
      ...pages
        .filter((page) => page.slug.split("/").length > 2)
        .map((page) => "/" + page.slug.split("/")[1]),

      ...groupPresets
        .filter((page) => !!page.slugPrefix)
        .map<string>((page) => page.slugPrefix as string),
    ])
  ).filter((p) => !!p);

  return groupPaths.sort().map((name) => {
    const findPreset = groupPresets.find(
      (preset) => preset.slugPrefix === name
    );

    return {
      name,
      pages: pages.filter((page) => page.slug.startsWith(name)),
      preset: findPreset || undefined,
    };
  });
};

export type TGroupPage = {
  name: string;
  pages: { id: string; slug: string }[];
  preset?: TPagePreset;
};
