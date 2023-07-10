import { FC } from "react";
import { TDividerNode } from "../../Content.types";
import { styleToCSSProperties } from "@/makasi/core/editors/StyleEditor/StyleEditor.utils";

export const DividerNode: FC<{
  node: TDividerNode;
  onChange?: (node: TDividerNode) => void;
}> = ({ node, onChange }) => <hr style={styleToCSSProperties(node.style)} />;
