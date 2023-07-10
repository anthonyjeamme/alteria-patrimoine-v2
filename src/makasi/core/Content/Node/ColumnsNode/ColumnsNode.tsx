import { classNameModule } from "@/utils/className/className";
import styles from "./ColumnsNode.module.scss";
import { FC } from "react";
import { TContentColumnsNode } from "../../Content.types";
import Node from "../Node";
import { TComponentDefinition } from "@/makasi/core/Component/Component.types";
import { styleToCSSProperties } from "@/makasi/core/editors/StyleEditor/StyleEditor.utils";
import { updateElement } from "@/makasi/core/Page/PageEdition/PageEdition.utils";
const className = classNameModule(styles);

const ColumnsNode: FC<{
  node: TContentColumnsNode;
  components?: TComponentDefinition[];
  onChange?: (node: TContentColumnsNode) => void;
}> = ({ node, components, onChange }) => {
  return (
    <div {...className("ColumnsNode")} style={styleToCSSProperties(node.style)}>
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
};

export default ColumnsNode;
