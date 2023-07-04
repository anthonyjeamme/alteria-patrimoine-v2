import { createElement } from "react";

export const TextRender = ({ data }) => {
  if (!data?.root?.children) return null;

  return (
    <div>
      {data.root.children.map((block, index) => (
        <Block block={block} key={index} />
      ))}
    </div>
  );
};

const Block = ({ block }) => {
  switch (block.type) {
    case "paragraph":
      return (
        <p>
          {block.children.map((child, index) => (
            <Node node={child} key={index} />
          ))}
        </p>
      );

    case "heading":
      return createElement(
        block.tag,
        {},
        block.children.map((child, index) => <Node node={child} key={index} />)
      );

    case "quote":
      return (
        <blockquote>
          {block.children.map((child, index) => (
            <Node node={child} key={index} />
          ))}
        </blockquote>
      );

    case "list":
      return (
        <ul>
          {block.children.map((child, index) => (
            <Node node={child} key={index} />
          ))}
        </ul>
      );
  }

  return <div>??? {block.type}</div>;
};

const Node = ({ node }) => {
  switch (node.type) {
    case "text":
      if (node.format === 1)
        return <span style={{ fontWeight: 700 }}>{node.text}</span>;

      return node.text;

    case "listitem":
      return (
        <li>
          {node.children.map((child, index) => (
            <Node node={child} key={index} />
          ))}
        </li>
      );
  }

  return <div>???</div>;
};
