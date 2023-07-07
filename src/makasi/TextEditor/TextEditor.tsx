"use client";

import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";

import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { AutoLinkNode, LinkNode } from "@lexical/link";

import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";

import { classNameModule } from "@/utils/className/className";
import styles from "./TextEditor.module.scss";
import Toolbar from "./Toolbar/Toolbar";
import { useRef, useState } from "react";
import Slash from "./Slash/Slash";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { SerializedEditorState, SerializedLexicalNode } from "lexical";
import { cleanData } from "./TextEditor.utils";
const className = classNameModule(styles);

import formatStyle from "./TextFormat.module.scss";

function onError(error: any) {
  console.error(error);
}

interface ITextEditorProps {
  value: any;
  onChange: (value: any) => void;
}

export function TextEditor({ value, onChange }: ITextEditorProps) {
  const [hasFocus, setHasFocus] = useState(false);

  const dataRef = useRef<SerializedEditorState<SerializedLexicalNode>>();

  return (
    <div
      className={
        className("TextEditor", { hasFocus }).className +
        " " +
        formatStyle["root"]
      }
      onFocus={() => {
        setHasFocus(true);
      }}
      onBlur={() => {
        setHasFocus(false);

        if (dataRef.current) onChange(cleanData(dataRef.current));
      }}
    >
      <LexicalComposer
        initialConfig={{
          namespace: "editor",
          onError,
          editorState: formatInitValue(value),
          nodes: [
            HeadingNode,
            ListNode,
            ListItemNode,
            QuoteNode,
            TableNode,
            TableCellNode,
            TableRowNode,
            AutoLinkNode,
            LinkNode,
          ],
        }}
      >
        <OnChangePlugin
          onChange={(editorState) => {
            dataRef.current = editorState.toJSON();
          }}
        />
        <Toolbar hasFocus={hasFocus} />
        <RichTextPlugin
          contentEditable={<ContentEditable />}
          placeholder={<div {...className("PlaceHolder")}>Ecrire...</div>}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <Slash />
        <LinkPlugin />
        <HistoryPlugin />
      </LexicalComposer>
    </div>
  );
}

const formatInitValue = (value: any) => {
  const empty = {
    root: {
      type: "root",
      children: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              text: "EMPTY",
            },
          ],
        },
      ],
    },
  };

  if (typeof value !== "object") return JSON.stringify(empty);

  if (!value?.root?.children?.length) return JSON.stringify(empty);

  return JSON.stringify(value);
};

const Export = () => {
  const [editor] = useLexicalComposerContext();

  return (
    <button
      onClick={() => {
        console.log(editor.getEditorState().toJSON());
      }}
    >
      Export
    </button>
  );
};

export default TextEditor;
