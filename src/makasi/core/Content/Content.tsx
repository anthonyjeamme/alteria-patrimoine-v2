"use client";

import { FC, Fragment } from "react";
import Node from "./Node/Node";
import { TContentNode } from "./Content.types";

import { TComponentDefinition } from "../Component/Component.types";
import {
  insertElement,
  updateElement,
} from "../Page/PageEdition/PageEdition.utils";

import { classNameModule } from "@/utils/className/className";
import styles from "./Content.module.scss";
import AddBlockLine from "./AddBlockLine/AddBlockLine";
import { useEditionContext } from "../contexts/EditionContext/EditionContext";
const className = classNameModule(styles);

interface IContentProps {
  nodes: TContentNode[];
  components?: TComponentDefinition[];
  onChange?: (nodes: TContentNode[]) => void;
}

const Content: FC<IContentProps> = ({ nodes, components, onChange }) => {
  const { edition } = useEditionContext();

  return (
    <div {...className("Content")}>
      {edition && (
        <AddBlockLine
          handleAddBlock={(node) => {
            onChange?.(insertElement(nodes, node, 0));
          }}
        />
      )}
      {nodes.map((node, index) => (
        <Fragment key={node.id}>
          <Node
            node={node}
            components={components}
            onChange={(node) => {
              onChange?.(updateElement(nodes, node, index));
            }}
          />
          {edition && (
            <AddBlockLine
              handleAddBlock={(node) => {
                onChange?.(insertElement(nodes, node, index + 1));
              }}
            />
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Content;
