import uniqid from "uniqid";

import { classNameModule } from "@/utils/className/className";
import styles from "./ContentEditor.module.scss";
import { FC, Fragment, useRef, useState } from "react";
import {
  TButtonNode,
  TContentBlockNode,
  TContentColumnsNode,
  TContentContainerNode,
  TContentNode,
  TContentTextNode,
  TDividerNode,
  TImageNode,
} from "../core/Content/Content.types";
import {
  insertElement,
  moveElement,
  removeElement,
  updateElement,
} from "../core/Page/PageEdition/PageEdition.utils";
import { Plus } from "@phosphor-icons/react";
import Input from "@/admin/common/Input/Input";
import Select from "@/admin/common/Select/Select";
import NodeEditionWrapper from "./NodeEditionWrapper/NodeEditionWrapper";
import { useClickOutside } from "@/utils/hooks/useClickOutside/useClickOutside";
import { TComponentDefinition } from "../core/Component/Component.types";
import StyleEditor from "../core/editors/StyleEditor/StyleEditor";
const className = classNameModule(styles);

interface IContentEditorProps {
  nodes: TContentNode[];
  onChange: (nodes: TContentNode[]) => void;
  components?: TComponentDefinition[];
}

const ContentEditor: FC<IContentEditorProps> = ({
  nodes,
  onChange,
  components,
}) => {
  return (
    <div {...className("ContentEditor")}>
      <Children nodes={nodes} onChange={onChange} components={components} />
    </div>
  );
};

const Children: FC<{
  nodes: TContentNode[];
  onChange: (nodes: TContentNode[]) => void;
  components?: TComponentDefinition[];
}> = ({ nodes, onChange, components }) => {
  return (
    <div>
      <div {...className("Children")}>
        <AddChildLine
          handleAddNode={(node) => {
            onChange([node, ...nodes]);
          }}
          components={components}
        />
        {nodes.map((node, index) => (
          <Fragment key={node.id}>
            <NodeEditionWrapper
              type={node.type}
              handleRemove={() => {
                onChange(removeElement(nodes, index));
              }}
              handleMoveDown={() => {
                onChange(moveElement(nodes, index, index + 1));
              }}
              handleMoveUp={() => {
                if (index === 0) return;
                onChange(moveElement(nodes, index, index - 1));
              }}
            >
              <NodeEdition
                node={node}
                onChange={(node) => {
                  onChange(updateElement(nodes, node, index));
                }}
                components={components}
              />
            </NodeEditionWrapper>
            <AddChildLine
              handleAddNode={(node) => {
                onChange(insertElement(nodes, node, index + 1));
              }}
              components={components}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

const AddChildLine: FC<{
  handleAddNode: (node: TContentNode) => void;
  components?: TComponentDefinition[];
}> = ({ handleAddNode, components }) => {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useClickOutside(isOpen, setIsOpen, rootRef);

  return (
    <div {...className("AddChildLine", { isOpen })} ref={rootRef}>
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
                type: "button",
                action: { type: "internal-link", pathname: "" },
                children: [],
              });
              setIsOpen(false);
            }}
          >
            Button
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
          {components?.map((component) => (
            <button
              key={component.name}
              onClick={() => {
                handleAddNode({
                  id: uniqid(),
                  type: "component",
                  componentId: component.name,
                  componentData: {},
                  componentParams: {},
                });
                setIsOpen(false);
              }}
            >
              {component.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContentEditor;

const NodeEdition: FC<{
  node: TContentNode;
  onChange: (node: TContentNode<any>) => void;
  components?: TComponentDefinition[];
}> = ({ node, onChange, components }) => {
  switch (node.type) {
    case "container":
      return (
        <ContainerNodeEdition
          node={node}
          onChange={onChange}
          components={components}
        />
      );
    case "divider":
      return <DividerNodeEdition node={node} onChange={onChange} />;
    case "text":
      return <TextNodeEdition node={node} onChange={onChange} />;
    case "columns":
      return (
        <ColumnsNodeEdition
          node={node}
          onChange={onChange}
          components={components}
        />
      );
    case "block":
      return (
        <BlockNodeEdition
          node={node}
          onChange={onChange}
          components={components}
        />
      );
    case "image":
      return <ImageNodeEdition node={node} onChange={onChange} />;
    case "button":
      return <ButtonNodeEdition node={node} onChange={onChange} />;
  }

  return null;
};

const ButtonNodeEdition: FC<{
  node: TButtonNode;
  onChange: (node: TButtonNode) => void;
}> = ({ node, onChange }) => {
  return (
    <>
      <StyleEditor
        fields={["color", "background"]}
        data={node.style}
        onChange={(style) => {
          onChange({
            ...node,
            style,
          });
        }}
      />

      <Children
        nodes={node.children}
        onChange={(children) => {
          onChange({
            ...node,
            children,
          });
        }}
      />
    </>
  );
};

const DividerNodeEdition: FC<{
  node: TDividerNode;
  onChange: (node: TDividerNode) => void;
}> = ({ node, onChange }) => {
  return (
    <div {...className("DividerNodeEdition")}>
      <StyleEditor
        fields={["height", "width", "border-radius", "margin"]}
        data={node.style}
        onChange={(style) => {
          onChange({
            ...node,
            style,
          });
        }}
      />
    </div>
  );
};

const ImageNodeEdition: FC<{
  node: TImageNode;
  onChange: (node: TImageNode) => void;
}> = ({ node, onChange }) => {
  return (
    <>
      <Input
        value={node.url}
        onChange={(url) => {
          onChange({
            ...node,
            url,
          });
        }}
      />

      <Input
        type="number"
        value={node.style?.height || 40}
        onChange={(height: any) => {
          onChange({
            ...node,
            style: {
              ...node.style,
              height: parseInt(height, 10),
            },
          });
        }}
      />
    </>
  );
};

const TextNodeEdition: FC<{
  node: TContentTextNode;
  onChange: (node: TContentTextNode) => void;
}> = ({ node, onChange }) => {
  return (
    <>
      <StyleEditor
        fields={["padding"]}
        data={node.style}
        onChange={(style) => {
          onChange({
            ...node,
            style,
          });
        }}
      />
    </>
  );
};

const ColumnsNodeEdition: FC<{
  node: TContentColumnsNode;
  onChange: (node: TContentColumnsNode) => void;
  components?: TComponentDefinition[];
}> = ({ node, onChange, components }) => {
  return (
    <>
      <StyleEditor
        fields={[
          "padding",
          "margin",
          "background",
          "color",
          "border-radius",
          "gap",
          "columns",
        ]}
        data={node.style}
        onChange={(style) => {
          onChange({
            ...node,
            style,
          });
        }}
      />

      <Children
        nodes={node.children}
        onChange={(children) => {
          onChange({
            ...node,
            children,
          });
        }}
        components={components}
      />
    </>
  );
};

const BlockNodeEdition: FC<{
  node: TContentBlockNode;
  onChange: (node: TContentBlockNode) => void;
  components?: TComponentDefinition[];
}> = ({ node, onChange, components }) => {
  return (
    <>
      <div>
        <StyleEditor
          fields={[
            "padding",
            "margin",
            "background",
            "color",
            "border-radius",
            "align-items",
          ]}
          data={node.style}
          onChange={(style) => {
            onChange({
              ...node,
              style,
            });
          }}
        />
      </div>

      <Children
        nodes={node.children}
        onChange={(children) => {
          onChange({
            ...node,
            children,
          });
        }}
        components={components}
      />
    </>
  );
};

const ContainerNodeEdition: FC<{
  node: TContentContainerNode;
  onChange: (node: TContentContainerNode) => void;
  components?: TComponentDefinition[];
}> = ({ node, onChange, components }) => {
  return (
    <>
      <StyleEditor
        fields={[
          "padding",
          "margin",
          "background",
          "color",
          "border-radius",
          "container-size",
        ]}
        data={node.style}
        onChange={(style) => {
          onChange({
            ...node,
            style,
          });
        }}
      />

      <Children
        nodes={node.children}
        onChange={(children) => {
          onChange({
            ...node,
            children,
          });
        }}
        components={components}
      />
    </>
  );
};
