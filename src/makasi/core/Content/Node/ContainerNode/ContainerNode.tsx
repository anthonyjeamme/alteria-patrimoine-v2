import { classNameModule } from "@/utils/className/className";
import styles from "./ContainerNode.module.scss";
import { FC } from "react";
import { TContentContainerNode } from "../../Content.types";
import Node from "../Node";
import { TComponentDefinition } from "@/makasi/core/Component/Component.types";
import { styleToCSSProperties } from "@/makasi/core/editors/StyleEditor/StyleEditor.utils";
import { updateElement } from "@/makasi/core/Page/PageEdition/PageEdition.utils";
const className = classNameModule(styles);

const ContainerNode: FC<{
  node: TContentContainerNode;
  components?: TComponentDefinition[];
  onChange?: (node: TContentContainerNode) => void;
}> = ({ node, components, onChange }) => (
  <div
    {...className("ContainerNode", { size: node.size })}
    style={styleToCSSProperties(node.style)}
  >
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

export default ContainerNode;
