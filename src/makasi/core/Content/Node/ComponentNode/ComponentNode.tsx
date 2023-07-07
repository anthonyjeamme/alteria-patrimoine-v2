import { FC } from "react";
import { TContentComponentNode } from "../../Content.types";
import Node from "../Node";

const ComponentNode: FC<{
  node: TContentComponentNode;
  components?: any[];
}> = ({ node, components }) => {
  if (!components) return null;

  const componentDefinition = components.find(
    ({ name }) => node.componentId === name
  );

  if (!componentDefinition) return null;

  const { Component } = componentDefinition;

  return (
    <Component params={node.componentParams} data={node.componentData}>
      {node.children?.map((node, index) => (
        <Node key={index} node={node} components={components} />
      ))}
    </Component>
  );
};

export default ComponentNode;
