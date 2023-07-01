import { TSectionDefinition } from "@/makasi/Section/Section.types";
import { HeaderSectionDefinition } from "./HeaderSection/HeaderSection.definition";
import { ArticlesSectionDefinition } from "./ArticlesSection/ArticlesSection.definition";
import { HomeSectionDefinition } from "./HomeSection/HomeSection.definition";

export const sections: TSectionDefinition[] = [
  HeaderSectionDefinition,
  ArticlesSectionDefinition,
  HomeSectionDefinition,
];
