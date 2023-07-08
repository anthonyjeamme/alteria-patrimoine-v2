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
  LinkSimple,
  Minus,
} from "@phosphor-icons/react";
import { $wrapNodes } from "@lexical/selection";

import { $isLinkNode, TOGGLE_LINK_COMMAND } from "@lexical/link";

import { INSERT_HORIZONTAL_RULE_COMMAND } from "@lexical/react/LexicalHorizontalRuleNode";
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
import LinkModal, { useLinkModal } from "./LinkModal/LinkModal";
const className = classNameModule(styles);

interface IToolbarProps {
  hasFocus: boolean;
}

const Toolbar: FC<IToolbarProps> = ({ hasFocus }) => {
  const [editor] = useLexicalComposerContext();
  const { isBold, isItalic, isUnderlined, align, blockType, isLink } =
    useToolbarState();

  const linkModal = useLinkModal();

  return (
    <div
      {...className("Toolbar", { hasFocus })}
      onMouseDown={(e) => {
        e.preventDefault();
      }}
    >
      <div>
        <LinkModal {...linkModal} />
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
        <LinkButton
          isActive={isLink}
          handleOpenModal={() => {
            linkModal.open();
          }}
        />
        {/* <DividerButton /> */}

        {/* <Divider /> */}

        <FormatTextButton Icon={TextBolder} format="bold" isActive={isBold} />
        <FormatTextButton
          Icon={TextItalic}
          format="italic"
          isActive={isItalic}
        />
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
    </div>
  );
};

export default Toolbar;

const DividerButton: FC<{}> = () => {
  const [editor] = useLexicalComposerContext();

  return (
    <button
      onClick={() => {
        //
        editor.dispatchCommand(INSERT_HORIZONTAL_RULE_COMMAND, undefined);
        console.log("INSERT DIVIDER !", INSERT_HORIZONTAL_RULE_COMMAND);
      }}
    >
      <Minus />
    </button>
  );
};

const LinkButton: FC<{ handleOpenModal: () => void; isActive: boolean }> = ({
  handleOpenModal,
  isActive,
}) => {
  const [editor] = useLexicalComposerContext();

  return (
    <button
      {...className({ isActive })}
      onClick={() => {
        editor.dispatchCommand(TOGGLE_LINK_COMMAND, {
          url: "https://www.google.com",
        });
      }}
    >
      <LinkSimple />
    </button>
  );
};

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
