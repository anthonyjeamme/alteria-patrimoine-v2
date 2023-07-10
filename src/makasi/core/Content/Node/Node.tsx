import { FC } from "react";

import TextNode from "./TextNode/TextNode";
import ImageNode from "./ImageNode/ImageNode";
import BlockNode from "./BlockNode/BlockNode";
import { TContentNode } from "../Content.types";
import ColumnsNode from "./ColumnsNode/ColumnsNode";
import { ButtonNode } from "./ButtonNode/ButtonNode";
import { DividerNode } from "./DividerNode/DividerNode";
import ComponentNode from "./ComponentNode/ComponentNode";
import ContainerNode from "./ContainerNode/ContainerNode";

import { TComponentDefinition } from "../../Component/Component.types";

const Node: FC<{
  node: TContentNode;
  components?: TComponentDefinition[];
  onChange?: (node: TContentNode<any>) => void;
}> = ({ node, components, onChange }) => {
  switch (node.type) {
    case "image":
      return <ImageNode node={node} onChange={onChange} />;
    case "block":
      return (
        <BlockNode node={node} components={components} onChange={onChange} />
      );
    case "columns":
      return (
        <ColumnsNode node={node} components={components} onChange={onChange} />
      );
    case "container":
      return (
        <ContainerNode
          node={node}
          components={components}
          onChange={onChange}
        />
      );
    case "button":
      return <ButtonNode node={node} onChange={onChange} />;
    case "text":
      return <TextNode node={node} onChange={onChange} />;
    case "divider":
      return <DividerNode node={node} onChange={onChange} />;
    case "component":
      return (
        <ComponentNode
          node={node}
          components={components}
          onChange={onChange}
        />
      );
    default:
      return null;
  }
};

export default Node;
