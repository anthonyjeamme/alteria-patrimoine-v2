import { classNameModule } from "@/utils/className/className";
import styles from "./NodeEditionWrapper.module.scss";
import { FC, ReactNode, useState } from "react";
import {
  CaretCircleDown,
  CaretDown,
  CaretUp,
  TrashSimple,
} from "@phosphor-icons/react";
const className = classNameModule(styles);

interface INodeEditionWrapperProps {
  children: ReactNode;
  type: string;
  handleRemove: () => void;
  handleMoveUp: () => void;
  handleMoveDown: () => void;
}

const NodeEditionWrapper: FC<INodeEditionWrapperProps> = ({
  type,
  children,
  handleRemove,
  handleMoveUp,
  handleMoveDown,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div {...className("NodeEditionWrapper", { isOpen })}>
      <header>
        <div>
          {children && (
            <button
              {...className("caret")}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <CaretCircleDown />
            </button>
          )}
          <span {...className("type")}>[{type}]</span>
        </div>
        <div>
          <button onClick={handleMoveUp}>
            <CaretUp />
          </button>
          <button onClick={handleMoveDown}>
            <CaretDown />
          </button>
          <button onClick={handleRemove}>
            <TrashSimple />
          </button>
        </div>
      </header>

      {isOpen && <div {...className("content")}>{children}</div>}
    </div>
  );
};

export default NodeEditionWrapper;
