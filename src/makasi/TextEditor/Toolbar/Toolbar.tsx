import { FC } from "react";
import {
  Icon,
  TextH,
  Quotes,
  TextHTwo,
  Paragraph,
  TextBolder,
  TextHThree,
  TextItalic,
  TextAlignLeft,
  TextUnderline,
  TextAlignRight,
  TextAlignCenter,
  TextAlignJustify,
  ListDashes,
  ListNumbers,
  Link,
} from "@phosphor-icons/react";
import { TOGGLE_LINK_COMMAND } from "@lexical/link";
import { $wrapNodes } from "@lexical/selection";

import {
  $getSelection,
  $isRangeSelection,
  ElementFormatType,
  FORMAT_ELEMENT_COMMAND,
  FORMAT_TEXT_COMMAND,
  TextFormatType,
} from "lexical";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useToolbarState } from "./Toolbar.hook";
import { TTagName, createNode } from "../TextEditor.utils";

import { classNameModule } from "@/utils/className/className";
import styles from "./Toolbar.module.scss";
const className = classNameModule(styles);

interface IToolbarProps {
  hasFocus: boolean;
}

const Toolbar: FC<IToolbarProps> = ({ hasFocus }) => {
  const [editor] = useLexicalComposerContext();
  const { isBold, isItalic, isUnderlined, align, blockType } =
    useToolbarState();

  return (
    <div
      {...className("Toolbar", { hasFocus })}
      onMouseDown={(e) => {
        e.preventDefault();
      }}
    >
      <TopLevelBlockButton
        Icon={Paragraph}
        isActive={blockType === "paragraph"}
        tag="p"
      />
      <TopLevelBlockButton
        Icon={TextH}
        isActive={blockType === "h1"}
        tag="h1"
      />
      <TopLevelBlockButton
        Icon={TextHTwo}
        isActive={blockType === "h2"}
        tag="h2"
      />
      <TopLevelBlockButton
        Icon={TextHThree}
        isActive={blockType === "h3"}
        tag="h3"
      />

      <TopLevelBlockButton
        Icon={Quotes}
        isActive={blockType === "quote"}
        tag="quote"
      />

      <TopLevelBlockButton
        Icon={ListDashes}
        isActive={blockType === "ul"}
        tag="bullet-list"
      />

      <TopLevelBlockButton
        Icon={ListNumbers}
        isActive={blockType === "ol"}
        tag="ordered-list"
      />

      <Divider />

      <FormatTextButton Icon={TextBolder} format="bold" isActive={isBold} />
      <FormatTextButton Icon={TextItalic} format="italic" isActive={isItalic} />
      <FormatTextButton
        Icon={TextUnderline}
        format="underline"
        isActive={isUnderlined}
      />

      <Divider />

      <FormatElementButton
        Icon={TextAlignLeft}
        format="left"
        isActive={align === "left"}
      />
      <FormatElementButton
        Icon={TextAlignCenter}
        format="center"
        isActive={align === "center"}
      />
      <FormatElementButton
        Icon={TextAlignRight}
        format="right"
        isActive={align === "right"}
      />
      <FormatElementButton
        Icon={TextAlignJustify}
        format="justify"
        isActive={align === "justify"}
      />
    </div>
  );
};

export default Toolbar;

const TopLevelBlockButton: FC<{
  isActive: boolean;
  Icon: Icon;
  tag: TTagName;
}> = ({ Icon, isActive, tag }) => {
  const [editor] = useLexicalComposerContext();

  return (
    <button
      {...className({ isActive })}
      onClick={() => {
        editor.update(() => {
          const selection = $getSelection();

          if ($isRangeSelection(selection)) {
            const node = createNode(tag);

            if (node) $wrapNodes(selection, () => node);
          }
        });
      }}
    >
      <Icon />
    </button>
  );
};

const FormatElementButton: FC<{
  format: ElementFormatType;
  isActive: boolean;
  Icon: Icon;
}> = ({ Icon, format, isActive }) => {
  const [editor] = useLexicalComposerContext();
  return (
    <button
      {...className({ isActive })}
      onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, format)}
    >
      <Icon />
    </button>
  );
};

const FormatTextButton: FC<{
  format: TextFormatType;
  isActive: boolean;
  Icon: Icon;
}> = ({ Icon, format, isActive }) => {
  const [editor] = useLexicalComposerContext();

  return (
    <button
      {...className({ isActive })}
      onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, format)}
    >
      <Icon />
    </button>
  );
};

const Divider = () => <div {...className("Divider")} />;
