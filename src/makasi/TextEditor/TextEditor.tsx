"use client";

import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";

import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { AutoLinkNode, LinkNode } from "@lexical/link";

import { classNameModule } from "@/utils/className/className";
import styles from "./TextEditor.module.scss";
import Toolbar from "./Toolbar/Toolbar";
import { useState } from "react";
import Slash from "./Slash/Slash";
const className = classNameModule(styles);

function onError(error: any) {
  console.error(error);
}

export function TextEditor() {
  const [hasFocus, setHasFocus] = useState(false);

  return (
    <div
      {...className("TextEditor")}
      onFocus={() => {
        setHasFocus(true);
      }}
      onBlur={() => {
        setHasFocus(false);
      }}
    >
      <LexicalComposer
        initialConfig={{
          namespace: "editor",
          onError,
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
        <Toolbar hasFocus={hasFocus} />
        <RichTextPlugin
          contentEditable={<ContentEditable />}
          placeholder={<div {...className("PlaceHolder")}>Ecrire...</div>}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <Slash />
        <HistoryPlugin />
      </LexicalComposer>
    </div>
  );
}
