import { FC } from "react";
import { TContentNode } from "../Content.types";
import ComponentNode from "./ComponentNode/ComponentNode";
import TextNode from "./TextNode/TextNode";
import { DividerNode } from "./DividerNode/DividerNode";

const Node: FC<{ node: TContentNode; components?: any[] }> = ({
  node,
  components,
}) => {
  switch (node.type) {
    // case "image":
    //   return <ImageNode node={node} />;
    // case "paragraph":
    //   return <ParagraphNode node={node} />;
    // case "slider":
    //   return <SliderNode node={node} components={components} />;
    // case "block":
    //   return <BlockNode node={node} />;
    // case "box":
    //   return <BoxNode node={node} />;
    // case "list":
    //   return <ListNode node={node} />;
    // case "brand":
    //   return <BrandNode node={node} />;
    // case "columns":
    //   return <ColumnsNode node={node} components={components} />;
    // case "container":
    //   return <ContainerNode node={node} />;
    // case "internal-link":
    //   return <InternalLinkNode node={node} />;
    // case "button":
    //   return <ButtonNode node={node} />;
    case "text":
      return <TextNode node={node} />;
    // case "spread-block":
    //   return <SpreadBlockNode node={node} />;
    case "divider":
      return <DividerNode />;
    case "component":
      return <ComponentNode node={node} components={components} />;
    default:
      return null;
  }
};

export default Node;
