import { classNameModule } from "@/utils/className/className";
import styles from "./BlockNode.module.scss";
import { FC } from "react";
import { TContentBlockNode } from "../../Content.types";
import Node from "../Node";
import { styleToCSSProperties } from "@/makasi/core/editors/StyleEditor/StyleEditor.utils";
import { updateElement } from "@/makasi/core/Page/PageEdition/PageEdition.utils";
const className = classNameModule(styles);

const BlockNode: FC<{
  node: TContentBlockNode;
  components?: any[];
  onChange?: (node: TContentBlockNode) => void;
}> = ({ node, components, onChange }) => (
  <div {...className("BlockNode")} style={styleToCSSProperties(node.style)}>
    {node.children.map((child, index) => (
      <Node
        node={child}
        key={index}
        components={components}
        onChange={(update) => {
          onChange?.({
            ...node,
            children: updateElement(node.children, update, index),
          });
        }}
      />
    ))}
  </div>
);

export default BlockNode;
