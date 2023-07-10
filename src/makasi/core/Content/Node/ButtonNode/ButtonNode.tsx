import { FC, ReactNode } from "react";
import { TAction, TButtonNode } from "../../Content.types";

import { classNameModule } from "@/utils/className/className";
import styles from "./ButtonNode.module.scss";
import Node from "../Node";
import Link from "next/link";
import { styleToCSSProperties } from "@/makasi/core/editors/StyleEditor/StyleEditor.utils";
import { updateElement } from "@/makasi/core/Page/PageEdition/PageEdition.utils";
const className = classNameModule(styles);

export const ButtonNode: FC<{
  node: TButtonNode;
  onChange?: (node: TButtonNode) => void;
}> = ({ node, onChange }) => {
  return (
    <ActionWrapper action={node.action}>
      <button
        {...className("ButtonNode")}
        style={styleToCSSProperties(node.style)}
        onClick={() => {
          console.log(node.action);
        }}
      >
        {node.children.map((child, index) => (
          <Node
            node={child}
            key={index}
            onChange={(update) => {
              onChange?.({
                ...node,
                children: updateElement(node.children, update, index),
              });
            }}
          />
        ))}
      </button>
    </ActionWrapper>
  );
};

const ActionWrapper: FC<{ action: TAction; children: ReactNode }> = ({
  action,
  children,
}) => {
  if (action.type === "internal-link") {
    return <Link href={action.pathname}>{children}</Link>;
  }

  if (action.type === "external-link") {
    return (
      <a href={action.href} rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return children;
};
