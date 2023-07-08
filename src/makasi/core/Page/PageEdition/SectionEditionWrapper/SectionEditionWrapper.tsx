import { Dispatch, FC, ReactNode, SetStateAction, useState } from "react";
import { classNameModule } from "@/utils/className/className";
import styles from "./SectionEditionWrapper.module.scss";
import {
  List,
  Plus,
  CaretUp,
  CaretDown,
  TrashSimple,
  X,
} from "@phosphor-icons/react";
import { TPageConfig } from "../../Page.types";
import { TSectionData } from "@/makasi/core/Section/Section.types";
const className = classNameModule(styles);

interface ISectionEditionWrapperProps {
  children: ReactNode;
  index: number;
  sectionData: TSectionData;
  pageConfig: TPageConfig;
  handleRemove: () => void;
  handleUpdateParams: (data: any) => void;
  handleMoveSection: (index: number) => void;
  handleAddSection: (index: number) => void;
}

const SectionEditionWrapper: FC<ISectionEditionWrapperProps> = ({
  children,
  index,
  pageConfig,
  sectionData,
  handleMoveSection,
  handleRemove,
  handleUpdateParams,
  handleAddSection,
}) => {
  const [isParamOpen, setIsParamOpen] = useState(false);

  return (
    <div {...className("SectionEditionWrapper")}>
      {isParamOpen && (
        <ParamsPanel
          params={sectionData.params}
          handleUpdateParams={handleUpdateParams}
          handleClose={() => {
            setIsParamOpen(false);
          }}
        />
      )}
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
        handleAddSection={handleAddSection}
        isParamOpen={isParamOpen}
        setIsParamOpen={setIsParamOpen}
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
  handleMoveSectionUp: () => void;
  handleMoveSectionDown: () => void;
  handleAddSection: (index: number) => void;
  pageConfig: TPageConfig;
  isParamOpen: boolean;
  setIsParamOpen: Dispatch<SetStateAction<boolean>>;
}

const Actions: FC<IActionProps> = ({
  index,
  handleMoveSectionDown,
  handleMoveSectionUp,
  handleRemove,
  handleAddSection,
  pageConfig,
  isParamOpen,
  setIsParamOpen,
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
            setIsParamOpen(!isParamOpen);
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

interface IParamsPanelProps {
  params: any;
  handleClose: () => void;
  handleUpdateParams: (data: any) => void;
}

const ParamsPanel: FC<IParamsPanelProps> = ({
  params = {},
  handleClose,
  handleUpdateParams,
}) => {
  return (
    <div {...className("ParamsPanel")}>
      <header>
        <ActionButton onClick={handleClose}>
          <X weight="bold" />
        </ActionButton>
      </header>
      <div>
        Fond :
        <input
          defaultValue={params.backgroundColor || ""}
          onChange={(e) => {
            handleUpdateParams({
              ...params,
              style: {
                ...params.style,
                backgroundColor: e.target.value,
              },
            });
          }}
        />
      </div>
      <div>
        Texte :
        <input
          defaultValue={params.color || ""}
          onChange={(e) => {
            handleUpdateParams({
              ...params,
              style: {
                ...params.style,
                color: e.target.value,
              },
            });
          }}
        />
      </div>
      <div>
        Marge :
        <input
          defaultValue={params.padding || ""}
          type="number"
          onChange={(e) => {
            handleUpdateParams({
              ...params,
              style: {
                ...params.style,
                padding: `${e.target.value}px 0`,
              },
            });
          }}
        />
      </div>
    </div>
  );
};
