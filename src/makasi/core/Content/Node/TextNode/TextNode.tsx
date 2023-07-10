"use client";

import { FC } from "react";
import { TContentTextNode } from "../../Content.types";
import { Text } from "@/makasi/core/Field";
import { FieldsContext } from "@/makasi/core/fieldsContext/fieldsContext";
import { styleToCSSProperties } from "@/makasi/core/editors/StyleEditor/StyleEditor.utils";

import { classNameModule } from "@/utils/className/className";
import styles from "./TextNode.module.scss";
const className = classNameModule(styles);

const TextNode: FC<{
  node: TContentTextNode;
  onChange?: (node: TContentTextNode) => void;
}> = ({ node, onChange }) => (
  <div style={styleToCSSProperties(node.style)} {...className("TextNode")}>
    <FieldsContext
      data={{
        text: node.value,
      }}
      update={(text) => {
        onChange?.({
          ...node,
          value: {
            ...node.value,
            text,
          },
        });
      }}
    >
      <Text name="text" edition />
    </FieldsContext>
  </div>
);

export default TextNode;
