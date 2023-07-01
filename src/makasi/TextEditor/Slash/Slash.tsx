import { FC, useCallback, useEffect, useState } from "react";
import { $getSelection, $isRangeSelection, TextNode } from "lexical";
import {
  TriggerFn,
  LexicalTypeaheadMenuPlugin,
  useBasicTypeaheadTriggerMatch,
} from "@lexical/react/LexicalTypeaheadMenuPlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

import { slashOptions } from "./Slash.options";
import { TTagName, createNode } from "../TextEditor.utils";
import { MentionTypeaheadOption } from "./Slash.types";
import { SlashOption } from "./SlashOption/SlashOption";

import { classNameModule } from "@/utils/className/className";
import styles from "./Slash.module.scss";
const className = classNameModule(styles);

const mentionsCache = new Map();
const lookupService = {
  search(
    string: string,
    callback: (results: Array<MentionTypeaheadOption>) => void
  ): void {
    const results = slashOptions.filter(
      (mention) =>
        !!mention.terms.find((term) =>
          term.startsWith(string.toLocaleLowerCase())
        )
    );
    callback(results);
  },
};

function useMentionLookupService(mentionString: string | null) {
  const [results, setResults] = useState<Array<MentionTypeaheadOption>>([]);

  useEffect(() => {
    const cachedResults = mentionsCache.get(mentionString);

    if (mentionString == null) {
      setResults([]);
      return;
    }

    if (cachedResults === null) {
      return;
    } else if (cachedResults !== undefined) {
      setResults(cachedResults);
      return;
    }

    mentionsCache.set(mentionString, null);
    lookupService.search(mentionString, (newResults) => {
      mentionsCache.set(mentionString, newResults);
      setResults(newResults);
    });
  }, [mentionString]);

  return results;
}

interface ISlashProps {}

const Slash: FC<ISlashProps> = ({}) => {
  const [queryString, setQueryString] = useState<string | null>(null);
  const [editor] = useLexicalComposerContext();
  const results = useMentionLookupService(queryString);

  const checkForSlashTriggerMatch = useBasicTypeaheadTriggerMatch("/", {
    minLength: 0,
  });

  const onSelectOption = useCallback(
    (
      selectedOption: MentionTypeaheadOption,
      nodeToReplace: TextNode | null,
      closeMenu: () => void
    ) => {
      editor.update(() => {
        const selection = $getSelection();
        if (!selection) return;

        if (nodeToReplace && $isRangeSelection(selection)) {
          const anchorNode = selection.anchor.getNode();
          const topLevelElement = anchorNode.getTopLevelElement();

          if (!topLevelElement) return;

          const node = createNode(selectedOption.key as TTagName);

          if (!node) return;

          nodeToReplace.remove();
          const children = topLevelElement.getChildren();
          node.append(...children);
          topLevelElement.replace(node);
          node.select();
        }

        closeMenu();
      });
    },
    [editor]
  );

  const checkForMentionMatch: TriggerFn = useCallback(
    (text: string) => {
      return checkForSlashTriggerMatch(text, editor);
    },
    [checkForSlashTriggerMatch, editor]
  );

  return (
    <LexicalTypeaheadMenuPlugin<MentionTypeaheadOption>
      onQueryChange={setQueryString}
      onSelectOption={onSelectOption}
      triggerFn={checkForMentionMatch}
      options={results}
      menuRenderFn={(
        anchorElementRef,
        { selectedIndex, selectOptionAndCleanUp, setHighlightedIndex }
      ) =>
        anchorElementRef.current && results.length ? (
          <div {...className("SlashMenu")}>
            {results.map((option, i) => {
              return (
                <SlashOption
                  key={option.label}
                  option={option}
                  isSelected={selectedIndex === i}
                  onClick={() => {
                    setHighlightedIndex(i);
                    selectOptionAndCleanUp(option);
                  }}
                  onMouseEnter={() => {
                    setHighlightedIndex(i);
                  }}
                />
              );
            })}
          </div>
        ) : null
      }
    />
  );
};

export default Slash;
