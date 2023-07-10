import { FC } from "react";
import { TImageNode } from "../../Content.types";
import { classNameModule } from "@/utils/className/className";
import styles from "./ImageNode.module.scss";
import { styleToCSSProperties } from "@/makasi/core/editors/StyleEditor/StyleEditor.utils";
const className = classNameModule(styles);

const ImageNode: FC<{
  node: TImageNode;
  onChange?: (node: TImageNode) => void;
}> = ({ node }) => {
  return (
    <img
      src={node.url}
      {...className("ImageNode")}
      style={styleToCSSProperties(node.style)}
    />
  );
};

export default ImageNode;
