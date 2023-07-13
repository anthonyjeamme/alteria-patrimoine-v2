"use client";

import { classNameModule } from "@/utils/className/className";
import styles from "./AddBlockLine.module.scss";
import {
  Cards,
  CaretDown,
  CaretRight,
  Image as ImageIcon,
  Plus,
  Rectangle,
  TextT,
} from "@phosphor-icons/react";
import uniqid from "uniqid";
import { FC, useRef, useState } from "react";
import { useClickOutside } from "@/utils/hooks/useClickOutside/useClickOutside";
import { TContentNode } from "../Content.types";
const className = classNameModule(styles);

interface IAddBlockLineProps {
  handleAddBlock: (node: TContentNode) => void;
}

const AddBlockLine: FC<IAddBlockLineProps> = ({ handleAddBlock }) => {
  const [isOpen, setIsOpen] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);

  useClickOutside(isOpen, setIsOpen, rootRef);

  return (
    <div {...className("AddBlockLine", { isOpen })} ref={rootRef}>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <Plus weight="bold" />
      </button>
      {isOpen && (
        <div {...className("Dropdown")}>
          <button
            onClick={() => {
              handleAddBlock({
                id: uniqid(),
                type: "container",
                size: "small",
                style: {
                  padding: [10, 0, 10, 0],
                },
                children: [
                  {
                    id: uniqid(),
                    type: "text",
                    value: {},
                  },
                ],
              });
              setIsOpen(false);
            }}
          >
            <TextT />
            <span>Texte</span>
          </button>
          <button
            onClick={() => {
              handleAddBlock({
                id: uniqid(),
                type: "container",
                size: "small",
                style: {
                  padding: [20, 20, 20, 20],
                  borderRadius: [5, 5, 5, 5],
                  backgroundColor: "white",
                },
                children: [
                  {
                    id: uniqid(),
                    type: "text",
                    value: {},
                  },
                ],
              });
              setIsOpen(false);
            }}
          >
            <Rectangle />
            <span>Box</span>
          </button>{" "}
          <button
            onClick={() => {
              handleAddBlock({
                id: uniqid(),
                type: "block",
                style: {
                  padding: [20, 0, 20, 0],
                  backgroundColor: "white",
                },
                children: [
                  {
                    id: uniqid(),
                    type: "container",
                    size: "small",
                    style: {
                      borderRadius: [5, 5, 5, 5],
                      backgroundColor: "white",
                    },
                    children: [
                      {
                        id: uniqid(),
                        type: "text",
                        value: {},
                      },
                    ],
                  },
                ],
              });
              setIsOpen(false);
            }}
          >
            <Rectangle />
            <span>Bannière</span>
          </button>
          <button
            onClick={() => {
              handleAddBlock({
                id: uniqid(),
                type: "container",
                size: "medium",
                style: {
                  padding: [10, 0, 10, 0],
                },
                children: [
                  {
                    id: uniqid(),
                    type: "image",
                    url: "https://images.unsplash.com/photo-1682687981922-7b55dbb30892?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
                  },
                ],
              });
              setIsOpen(false);
            }}
          >
            <ImageIcon weight="duotone" />
            <span>Image</span>
          </button>
          <button
            onClick={() => {
              handleAddBlock({
                id: uniqid(),
                type: "container",
                size: "small",
                children: [
                  {
                    id: uniqid(),
                    type: "divider",
                  },
                ],
              });
              setIsOpen(false);
            }}
          >
            <DividerIcon />
            <span>Séparateur</span>
          </button>
          <Menu
            label="Presets"
            options={[
              {
                label: "AAAAA",
              },
              {
                label: "AAAAA",
              },
              {
                label: "AAAAA",
              },
            ]}
          />
        </div>
      )}
    </div>
  );
};

export default AddBlockLine;

interface IMenuProps {
  label: string;
  options: {
    label: string;
  }[];
}

const Menu: FC<IMenuProps> = ({ label, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  return (
    <div {...className("Menu")} ref={rootRef}>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <Cards weight="duotone" />
        <span {...className("label")}>{label}</span>
        <span {...className("caret")}>
          <CaretRight />
        </span>
      </button>

      {isOpen && (
        <div {...className("menuDropdown")}>
          {options.map(({ label }) => (
            <button key={label} onClick={() => {}}>
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const DividerIcon = () => (
  <svg viewBox="0 0 100 100" style={{ height: "1em" }}>
    <line
      x1={10}
      y1={50}
      x2={90}
      y2={50}
      stroke="currentColor"
      strokeWidth={8}
    />
  </svg>
);
