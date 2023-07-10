import { FC } from "react";
import Node from "./Node/Node";
import { TContentNode } from "./Content.types";

import styles from "./Content.module.scss";
import { classNameModule } from "@/utils/className/className";
import { TComponentDefinition } from "../Component/Component.types";
import { updateElement } from "../Page/PageEdition/PageEdition.utils";
const className = classNameModule(styles);

interface IContentProps {
  nodes: TContentNode[];
  components?: TComponentDefinition[];
  onChange?: (nodes: TContentNode[]) => void;
}

const Content: FC<IContentProps> = ({ nodes, components, onChange }) => {
  return (
    <div {...className("Content")}>
      {nodes.map((node, index) => (
        <Node
          node={node}
          key={node.id}
          components={components}
          onChange={(node) => {
            onChange?.(updateElement(nodes, node, index));
          }}
        />
      ))}
    </div>
  );
};

export default Content;
