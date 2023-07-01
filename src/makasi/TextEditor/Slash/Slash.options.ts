import {
  Paragraph,
  Quotes,
  TextH,
  TextHThree,
  TextHTwo,
} from "@phosphor-icons/react";

import { MentionTypeaheadOption, TSlashOption } from "./Slash.types";

export const slashOptions: Array<MentionTypeaheadOption> = [
  {
    label: "Titre 1",
    Icon: TextH,
    terms: ["titre 1", "h1", "t1"],
    key: "h1",
  },
  {
    label: "Titre 2",
    Icon: TextHTwo,
    terms: ["titre 2", "h2", "t2"],
    key: "h2",
  },
  {
    label: "Titre 3",
    Icon: TextHThree,
    terms: ["titre 3", "h3", "t3"],
    key: "h3",
  },
  {
    label: "Paragraphe",
    Icon: Paragraph,
    terms: ["paragraphe", "p"],
    key: "p",
  },
  {
    label: "Citation",
    Icon: Quotes,
    terms: ["quote", "blockquote", "citation"],
    key: "quote",
  },
].map(
  ({ label, terms, Icon, key }) =>
    new MentionTypeaheadOption(label, terms, Icon, key)
);
