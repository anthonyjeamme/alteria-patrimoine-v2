"use client";

import { FC } from "react";
import { TContentComponentNode } from "../../Content.types";
import Node from "../Node";
import { TComponentDefinition } from "@/makasi/core/Component/Component.types";
import { FieldsContext } from "@/makasi/core/fieldsContext/fieldsContext";

const ComponentNode: FC<{
  node: TContentComponentNode;
  components?: TComponentDefinition[];
  onChange?: (node: TComponentDefinition) => void;
}> = ({ node, components, onChange }) => {
  if (!components) return null;

  const componentDefinition = components.find(
    ({ name }) => node.componentId === name
  );

  if (!componentDefinition) return null;

  const { Component } = componentDefinition;

  return (
    <Component params={node.componentParams} data={node.componentData}>
      <FieldsContext
        data={{}}
        update={(data) => {
          // onChange?.()
        }}
      >
        {node.children?.map((node, index) => (
          <Node key={index} node={node} components={components} />
        ))}
      </FieldsContext>
    </Component>
  );
};

export default ComponentNode;
