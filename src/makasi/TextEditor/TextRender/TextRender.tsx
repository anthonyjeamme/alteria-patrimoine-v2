import { FC, createElement } from "react";

import {
  TLexicalDocument,
  TLexicalNode,
  TLexicalTopLevelNode,
} from "./TextRender.types";
import formatStyle from "../TextFormat.module.scss";
import { getBlockFormatStyle, getFormattingStyle } from "./TextRender.utils";

export const TextRender: FC<{
  data: TLexicalDocument;
}> = ({ data }) => {
  if (!data?.root?.children) return null;

  return (
    <div className={formatStyle["root"]}>
      {data.root.children.map((block, index) => (
        <Block block={block} key={index} />
      ))}
    </div>
  );
};

const Block: FC<{
  block: TLexicalTopLevelNode;
}> = ({ block }) => {
  switch (block.type) {
    case "paragraph":
      return (
        <p style={getBlockFormatStyle(block)}>
          {block.children.map((child, index) => (
            <Node node={child} key={index} />
          ))}
        </p>
      );

    case "heading":
      return createElement(
        block.tag,
        {
          style: getBlockFormatStyle(block),
        },
        block.children.map((child, index) => <Node node={child} key={index} />)
      );

    case "quote":
      return (
        <blockquote style={getBlockFormatStyle(block)}>
          {block.children.map((child, index) => (
            <Node node={child} key={index} />
          ))}
        </blockquote>
      );

    case "list":
      return (
        <ul style={getBlockFormatStyle(block)}>
          {block.children.map((child, index) => (
            <Node node={child} key={index} />
          ))}
        </ul>
      );
  }

  console.log(block);
  return <div>UNHANDLED TOPLEVEL BLOCK</div>;
};

const Node: FC<{ node: TLexicalNode }> = ({ node }) => {
  switch (node.type) {
    case "text":
      if (node.format === 0) return node.text;

      const style = getFormattingStyle(node.format);

      return <span style={style}>{node.text}</span>;

    case "listitem":
      return (
        <li style={getBlockFormatStyle(node)}>
          {node.children.map((child, index) => (
            <Node node={child} key={index} />
          ))}
        </li>
      );

    case "linebreak":
      return <br />;

    case "link":
      return (
        <a href={node.url}>
          {node.children.map((child, index) => (
            <Node node={child} key={index} />
          ))}
        </a>
      );
  }

  console.log(node);
  return <div>UNHANDLED NODE</div>;
};
