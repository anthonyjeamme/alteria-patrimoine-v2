import { MenuOption } from "@lexical/react/LexicalTypeaheadMenuPlugin";
import { Icon } from "@phosphor-icons/react";

export type TSlashOption = {
  label: string;
  Icon: Icon;
  terms: string[];
  key: string;
};

export class MentionTypeaheadOption extends MenuOption {
  label: string;
  description?: string;
  terms: string[];
  Icon: Icon;

  constructor(
    label: string,
    terms: string[],
    Icon: Icon,
    key: string,
    description?: string
  ) {
    super(key);
    this.label = label;
    this.terms = terms;
    this.Icon = Icon;
    this.description = description;
  }
}
