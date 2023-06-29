"use client";

import { classNameModule } from "@/utils/className/className";
import styles from "./Content.module.scss";
import { CSSProperties, FC } from "react";
import {
  TContentBlockNode,
  TContentBrandNode,
  TContentColumnsNode,
  TContentContainerNode,
  TContentInternalLinkNode,
  TContentNode,
  TContentSpreadBlockNode,
  TContentTextNode,
} from "./Content.types";
import Link from "next/link";
const className = classNameModule(styles);

interface IContentProps {
  nodes: TContentNode[];
}

const Content: FC<IContentProps> = ({ nodes }) => {
  return (
    <div {...className("Content")}>
      {nodes.map((node, index) => (
        <Node node={node} key={index} />
      ))}
    </div>
  );
};

const Node: FC<{ node: TContentNode }> = ({ node }) => {
  switch (node.type) {
    case "block":
      return <BlockNode node={node} />;
    case "brand":
      return <BrandNode node={node} />;
    case "columns":
      return <ColumnsNode node={node} />;
    case "container":
      return <ContainerNode node={node} />;
    case "internal-link":
      return <InternalLinkNode node={node} />;
    case "text":
      return <TextNode node={node} />;
    case "spread-block":
      return <SpreadBlockNode node={node} />;
    default:
      return null;
  }
};

const BlockNode: FC<{ node: TContentBlockNode }> = ({ node }) => (
  <div {...className("BlockNode")} style={node.style}>
    {node.children.map((child, index) => (
      <Node node={child} key={index} />
    ))}
  </div>
);

const SpreadBlockNode: FC<{ node: TContentSpreadBlockNode }> = ({ node }) => (
  <div {...className("SpreadBlockNode")} style={node.style}>
    {node.children.map((child, index) => (
      <Node node={child} key={index} />
    ))}
  </div>
);

const BrandNode: FC<{ node: TContentBrandNode }> = ({ node }) => (
  <div {...className("BrandNode")} style={node.style}>
    <img
      {...className("brand")}
      height={38}
      width={138}
      src="https://res.cloudinary.com/anthony-jeamme-stuff/image/upload/v1639411627/alteria-white.svg"
      alt=""
    />
  </div>
);

const ColumnsNode: FC<{ node: TContentColumnsNode }> = ({ node }) => (
  <div
    {...className("ColumnsNode")}
    style={
      {
        ...node.style,
        "--mobile-columns": node.columns.mobile,
        "--tablet-columns": node.columns.tablet,
        "--desktop-columns": node.columns.desktop,
      } as CSSProperties
    }
  >
    {node.children.map((child, index) => (
      <Node node={child} key={index} />
    ))}
  </div>
);

const ContainerNode: FC<{ node: TContentContainerNode }> = ({ node }) => (
  <div {...className("ContainerNode", { size: node.size })} style={node.style}>
    {node.children.map((child, index) => (
      <Node node={child} key={index} />
    ))}
  </div>
);

const InternalLinkNode: FC<{ node: TContentInternalLinkNode }> = ({ node }) => (
  <Link
    {...className("InternalLinkNode")}
    href={node.pathname}
    style={node.style}
  >
    {node.text}
  </Link>
);

const TextNode: FC<{ node: TContentTextNode }> = ({ node }) => (
  <div {...className("TextNode")} style={node.style}>
    {node.value}
  </div>
);

export default Content;
