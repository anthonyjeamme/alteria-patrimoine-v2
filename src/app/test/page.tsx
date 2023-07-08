"use client";

import uniqid from "uniqid";
import { classNameModule } from "@/utils/className/className";
import styles from "./page.module.scss";
import { FC, useState } from "react";
import Content from "@/makasi/core/Content/Content";
import { TContentNode } from "@/makasi/core/Content/Content.types";
import { CaretDown, CaretUp, Plus, Trash } from "@phosphor-icons/react";
import { moveElement } from "@/makasi/core/Page/PageEdition/PageEdition.utils";
const className = classNameModule(styles);

const Page = () => {
  const [data, setData] = useState<{ nodes: TContentNode[] }>({
    nodes: [],
  });

  return (
    <div {...className("Page")}>
      <div>
        <Content nodes={data.nodes} />
      </div>
      <div>
        <ContentEditor
          nodes={data.nodes}
          onChange={(nodes) => {
            setData({ nodes });
          }}
        />
      </div>
    </div>
  );
};

export default Page;

interface IContentEditorProps {
  nodes: TContentNode[];
  onChange: (nodes: TContentNode[]) => void;
}

const ContentEditor: FC<IContentEditorProps> = ({ nodes, onChange }) => {
  return (
    <div {...className("ContentEditor")}>
      {/* <button
        onClick={() => {
          onChange([
            ...nodes,
            {
              id: uniqid(),
              type: "text",
              value: "Hello",
            },
          ]);
        }}
      >
        <Plus />
      </button> */}

      <AddNode
        handleAddNode={(node) => {
          onChange([node, ...nodes]);
        }}
      />
      <div {...className("nodes")}>
        {nodes.map((node, index) => (
          <div {...className("Node")} key={node.id}>
            {node.type}

            {node.type === "text" && (
              <input
                value={node.value}
                onChange={(e) => {
                  onChange(
                    nodes.map((n) =>
                      n.id === node.id ? { ...n, value: e.target.value } : n
                    )
                  );
                }}
              />
            )}

            <button
              onClick={() => {
                onChange(moveElement(nodes, index, index - 1));
              }}
            >
              <CaretUp />
            </button>
            <button
              onClick={() => {
                onChange(moveElement(nodes, index, index + 1));
              }}
            >
              <CaretDown />
            </button>

            <button
              onClick={() => {
                onChange(nodes.filter((n) => n.id !== node.id));
              }}
            >
              <Trash />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

interface IAddNodeProps {
  handleAddNode: (node: TContentNode) => void;
}

const AddNode: FC<IAddNodeProps> = ({ handleAddNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div {...className("AddNode")}>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <Plus />
      </button>

      {isOpen && (
        <div {...className("dropdown")}>
          <button
            onClick={() => {
              handleAddNode({
                id: uniqid(),
                type: "text",
                value: "Hello",
              });
              setIsOpen(false);
            }}
          >
            Texte
          </button>
          <button
            onClick={() => {
              handleAddNode({
                id: uniqid(),
                type: "container",
                children: [],
                size: "medium",
              });
              setIsOpen(false);
            }}
          >
            Conteneur
          </button>
          <button
            onClick={() => {
              handleAddNode({
                id: uniqid(),
                type: "image",
                url: "https://alteriapatrimoine.com/",
              });
              setIsOpen(false);
            }}
          >
            Image
          </button>
          <button
            onClick={() => {
              handleAddNode({
                id: uniqid(),
                type: "divider",
              });
              setIsOpen(false);
            }}
          >
            Diviseur
          </button>
          <button
            onClick={() => {
              handleAddNode({
                id: uniqid(),
                type: "list",
                children: [],
              });
              setIsOpen(false);
            }}
          >
            Liste
          </button>
          <button
            onClick={() => {
              handleAddNode({
                id: uniqid(),
                type: "columns",
                columns: { desktop: 3, tablet: 2, mobile: 1 },
                children: [],
              });
              setIsOpen(false);
            }}
          >
            Colonnes
          </button>
          <button
            onClick={() => {
              handleAddNode({
                id: uniqid(),
                type: "paragraph",
                children: [],
              });
              setIsOpen(false);
            }}
          >
            Paragraph
          </button>
          <button
            onClick={() => {
              handleAddNode({
                id: uniqid(),
                type: "block",
                children: [],
              });
              setIsOpen(false);
            }}
          >
            Block
          </button>
          <button
            onClick={() => {
              handleAddNode({
                id: uniqid(),
                type: "internal-link",
                pathname: "",
                text: "",
              });
              setIsOpen(false);
            }}
          >
            Lien interne
          </button>
        </div>
      )}
    </div>
  );
};
