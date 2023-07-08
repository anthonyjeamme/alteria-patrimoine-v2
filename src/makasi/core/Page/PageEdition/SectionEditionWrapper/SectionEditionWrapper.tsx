import { FC, ReactNode } from "react";
import { classNameModule } from "@/utils/className/className";
import styles from "./SectionEditionWrapper.module.scss";
import {
  List,
  Plus,
  CaretUp,
  CaretDown,
  TrashSimple,
} from "@phosphor-icons/react";
import { TPageConfig } from "../../Page.types";
const className = classNameModule(styles);

interface ISectionEditionWrapperProps {
  children: ReactNode;
  index: number;
  pageConfig: TPageConfig;
  handleRemove: () => void;
  handleUpdateParams: () => void;
  handleMoveSection: (index: number) => void;
  handleAddSection: (index: number) => void;
}

const SectionEditionWrapper: FC<ISectionEditionWrapperProps> = ({
  children,
  index,
  pageConfig,
  handleMoveSection,
  handleRemove,
  handleUpdateParams,
  handleAddSection,
}) => {
  return (
    <div {...className("SectionEditionWrapper")}>
      <Actions
        pageConfig={pageConfig}
        index={index}
        handleMoveSectionDown={() => {
          handleMoveSection(index + 1);
        }}
        handleMoveSectionUp={() => {
          handleMoveSection(index - 1);
        }}
        handleRemove={handleRemove}
        handleUpdateParams={handleUpdateParams}
        handleAddSection={handleAddSection}
      />

      {children}

      <BottomActions
        index={index}
        pageConfig={pageConfig}
        handleAddSection={handleAddSection}
      />
    </div>
  );
};

export default SectionEditionWrapper;

interface IActionProps {
  index: number;
  handleRemove: () => void;
  handleUpdateParams: () => void;
  handleMoveSectionUp: () => void;
  handleMoveSectionDown: () => void;
  handleAddSection: (index: number) => void;
  pageConfig: TPageConfig;
}

const Actions: FC<IActionProps> = ({
  index,
  handleMoveSectionDown,
  handleMoveSectionUp,
  handleRemove,
  handleUpdateParams,
  handleAddSection,
  pageConfig,
}) => {
  return (
    <div {...className("Actions")}>
      <div>
        {!pageConfig.lockSections && (
          <>
            <ActionButton onClick={handleMoveSectionDown}>
              <CaretDown weight="bold" />
            </ActionButton>
            <ActionButton onClick={handleMoveSectionUp}>
              <CaretUp weight="bold" />
            </ActionButton>
          </>
        )}
      </div>

      <div>
        {!pageConfig.lockSections && (
          <ActionButton
            onClick={() => {
              handleAddSection(index);
            }}
          >
            <Plus weight="bold" />
          </ActionButton>
        )}
      </div>

      <div>
        {!pageConfig.lockSections && (
          <ActionButton onClick={handleRemove}>
            <TrashSimple weight="bold" />
          </ActionButton>
        )}
        <ActionButton
          onClick={() => {
            console.log("ok");
          }}
        >
          <List weight="bold" />
        </ActionButton>
      </div>
    </div>
  );
};

interface IBottomActionsProps {
  index: number;
  handleAddSection: (index: number) => void;
  pageConfig: TPageConfig;
}

const BottomActions: FC<IBottomActionsProps> = ({
  index,
  handleAddSection,
  pageConfig,
}) => {
  return (
    <div {...className("BottomActions")}>
      <div>
        {!pageConfig.lockSections && (
          <ActionButton
            onClick={() => {
              handleAddSection(index + 1);
            }}
          >
            <Plus />
          </ActionButton>
        )}
      </div>
    </div>
  );
};

interface IActionButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const ActionButton: FC<IActionButtonProps> = ({ children, onClick }) => {
  return (
    <button {...className("ActionButton")} onClick={onClick}>
      {children}
    </button>
  );
};
