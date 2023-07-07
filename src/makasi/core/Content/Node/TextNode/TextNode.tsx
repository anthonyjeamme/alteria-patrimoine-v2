import { FC } from "react";
import { TContentTextNode } from "../../Content.types";

const TextNode: FC<{ node: TContentTextNode }> = ({ node }) => (
  <span style={node.style}>{node.value}</span>
);

export default TextNode;
