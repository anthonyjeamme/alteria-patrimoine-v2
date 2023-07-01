import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  ElementNode,
} from "lexical";
import { UpdateListener } from "lexical/LexicalEditor";
import { mergeRegister } from "@lexical/utils";

import { useEffect, useState } from "react";

export const useToolbarState = () => {
  const [editor] = useLexicalComposerContext();
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderlined, setIsUnderlined] = useState(false);
  const [isBulletList, setIsBulletList] = useState(false);
  const [isOrderedList, setIsOrderedList] = useState(false);
  const [align, setAlign] = useState<"left" | "center" | "right" | "justify">(
    "left"
  );
  const [blockType, setBlockType] = useState("paragraph");

  useEffect(() => {
    const handleChange: UpdateListener = ({ editorState }) => {
      editorState.read(() => {
        const selection = $getSelection();
        if (!selection) return;

        if ($isRangeSelection(selection)) {
          setIsBold(selection.hasFormat("bold"));
          setIsItalic(selection.hasFormat("italic"));
          setIsUnderlined(selection.hasFormat("underline"));

          const anchorNode = selection.anchor.getNode();
          const topLevelElement = anchorNode.getTopLevelElement();

          if (topLevelElement && $isElementNode(topLevelElement)) {
            setAlign(getNodeTextAlign(topLevelElement));

            const blockType = topLevelElement.getType();

            setBlockType(
              ["list", "heading"].includes(blockType)
                ? topLevelElement.getTag()
                : blockType
            );
          }
        }
      });
    };

    return mergeRegister(editor.registerUpdateListener(handleChange));
  }, [editor]);

  return {
    isBold,
    isItalic,
    isUnderlined,
    align,
    blockType,
    isBulletList,
    isOrderedList,
  };
};

const getNodeTextAlign = (node: ElementNode) => {
  switch (node.getFormat()) {
    case 2:
      return "center";
    case 3:
      return "right";
    case 4:
      return "justify";
    default:
      return "left";
  }
};
