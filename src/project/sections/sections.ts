import { TSectionDefinition } from "@/makasi/core/Section/Section.types";
import { HeaderSectionDefinition } from "./HeaderSection/HeaderSection.definition";
import { ArticlesSectionDefinition } from "./ArticlesSection/ArticlesSection.definition";
import { HomeSectionDefinition } from "./HomeSection/HomeSection.definition";
import { LegalHeaderSectionDefinition } from "./LegalHeaderSection/LegalHeaderSection.definition";
import { TextSectionDefinition } from "./TextSection/TextSection.definition";

export const sections: TSectionDefinition[] = [
  HeaderSectionDefinition,
  ArticlesSectionDefinition,
  HomeSectionDefinition,
  LegalHeaderSectionDefinition,
  TextSectionDefinition,
];
