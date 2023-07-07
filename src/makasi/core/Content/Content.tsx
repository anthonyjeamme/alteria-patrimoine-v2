import { classNameModule } from "@/utils/className/className";
import styles from "./Content.module.scss";
import { CSSProperties, FC, ReactNode } from "react";
import {
  TAction,
  TBoxNode,
  TListNode,
  TButtonNode,
  TContentNode,
  TParagraphNode,
  TContentTextNode,
  TContentBlockNode,
  TContentBrandNode,
  TContentColumnsNode,
  TContentContainerNode,
  TContentSpreadBlockNode,
  TContentInternalLinkNode,
  TListItemNode,
  TDividerNode,
  TContentComponentNode,
  TImageNode,
  TSliderNode,
} from "./Content.types";
import Link from "next/link";
import Node from "./Node/Node";
const className = classNameModule(styles);

interface IContentProps {
  nodes: TContentNode[];
  components?: any[];
}

const Content: FC<IContentProps> = ({ nodes, components }) => {
  return (
    <div {...className("Content")}>
      {nodes.map((node, index) => (
        <Node node={node} key={index} components={components} />
      ))}
    </div>
  );
};

const ImageNode: FC<{ node: TImageNode }> = ({ node }) => (
  <img src={node.url} />
);

const DividerNode: FC<{ node: TDividerNode }> = ({ node }) => (
  <hr {...className("DividerNode")} />
);

const ParagraphNode: FC<{ node: TParagraphNode }> = ({ node }) => (
  <p {...className("ParagraphNode")} style={node.style}>
    {node.children.map((child, index) => (
      <Node node={child} key={index} />
    ))}
  </p>
);

const SliderNode: FC<{ node: TSliderNode; components?: any[] }> = ({
  node,
  components,
}) => (
  <div {...className("SliderNode")} style={node.style}>
    <div>
      {node.children.map((child, index) => (
        <Node node={child} key={index} components={components} />
      ))}
    </div>
  </div>
);

const BoxNode: FC<{ node: TBoxNode }> = ({ node }) => (
  <div {...className("BoxNode")} style={node.style}>
    {node.children.map((child, index) => (
      <Node node={child} key={index} />
    ))}
  </div>
);

const ListNode: FC<{ node: TListNode }> = ({ node }) => (
  <ul {...className("ListNode")} style={node.style}>
    {node.children.map((child, index) => (
      <ListItemNode node={child} key={index} />
    ))}
  </ul>
);

const ListItemNode: FC<{ node: TListItemNode }> = ({ node }) => (
  <li {...className("ListItemNode")} style={node.style}>
    {node.children.map((child, index) => (
      <Node node={child} key={index} />
    ))}
  </li>
);

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

const ButtonNode: FC<{ node: TButtonNode }> = ({ node }) => {
  return (
    <ActionWrapper action={node.action}>
      <button
        {...className("ButtonNode", { theme: node.theme || "normal" })}
        onClick={() => {
          console.log(node.action);
        }}
      >
        {node.children.map((child, index) => (
          <Node node={child} key={index} />
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

const ColumnsNode: FC<{ node: TContentColumnsNode; components?: any[] }> = ({
  node,
  components,
}) => (
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
      <Node node={child} key={index} components={components} />
    ))}
  </div>
);

const ContainerNode: FC<{ node: TContentContainerNode }> = ({ node }) => (
  <div
    {...className("ContainerNode", { size: node.size })}
    style={{ ...node.style, width: node.maxWidth }}
  >
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
  <span {...className("TextNode")} style={node.style}>
    {node.value}
  </span>
);

export default Content;
