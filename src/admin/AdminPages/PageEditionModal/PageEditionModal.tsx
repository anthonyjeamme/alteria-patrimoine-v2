import SideModal, {
  TSideModalHook,
  useSideModal,
} from "@/admin/common/SideModal/SideModal";
import { FC, ReactNode, createContext, useContext, useState } from "react";

import { classNameModule } from "@/utils/className/className";
import styles from "./PageEditionModal.module.scss";
import Input from "@/admin/common/Input/Input";
import Select from "@/admin/common/Select/Select";
import Textarea from "@/admin/common/Textarea/Textarea";
import { FloppyDisk, Trash } from "@phosphor-icons/react";
import Checkbox from "@/admin/common/Checkbox/Checkbox";
import { TPageData, TPagePath } from "@/makasi/core/Page/Page.types";
import { useAdminPagesContext } from "../AdminPagesContext/AdminPagesContext";
import { TPagePreset } from "../AdminPages";

const className = classNameModule(styles);

export type TPageEditionPayload =
  | {
      create: true;
      pageData?: Partial<TPageData>;
      presetName?: string;
    }
  | {
      create: false;
      pageData: Partial<TPageData>;
    };

const pageEditionModalContext =
  // @ts-ignore
  createContext<TSideModalHook<TPageEditionPayload>>();

export const usePageEditionModal = () => useContext(pageEditionModalContext);

export const PageEditionModalContext: FC<{
  children: ReactNode;
  pagePresets: TPagePreset[];
  pagePaths: TPagePath[];
}> = ({ children, pagePresets, pagePaths }) => {
  const sideModal = useSideModal<TPageEditionPayload>();

  return (
    <pageEditionModalContext.Provider value={sideModal}>
      <SideModal {...sideModal}>
        {sideModal.payload && (
          <EditPage
            pagePresets={pagePresets}
            payload={sideModal.payload}
            handleClose={() => {
              sideModal.close();
            }}
            pagePaths={pagePaths}
          />
        )}
      </SideModal>

      {children}
    </pageEditionModalContext.Provider>
  );
};

const EditPage: FC<{
  payload: TPageEditionPayload;
  handleClose: () => void;
  pagePresets: TPagePreset[];
  pagePaths: TPagePath[];
}> = ({ payload, handleClose, pagePresets, pagePaths }) => {
  const [pageData, setPageData] = useState<Partial<TPageData>>(
    payload.create
      ? {
          slug: "/",
          metadata: { title: "", description: "" },
          sections: [],
          public: false,
          ...payload.pageData,
        }
      : payload.pageData
  );
  const [type, setType] = useState<string | null>(
    payload.create ? payload.presetName || pagePresets[0].name : null
  );
  const { deletePage, createPage, updatePage } = useAdminPagesContext();

  return (
    <div {...className("EditPage")}>
      <div {...className("content")}>
        {!payload.create && (
          <CheckboxLine
            checked={pageData.public || false}
            label="Visible"
            onClick={() => {
              setPageData({ ...pageData, public: !pageData.public });
            }}
          />
        )}

        {payload.create && !payload.presetName && (
          <div {...className("Field")}>
            <div {...className("label")}>Type de page</div>
            <Select
              value={type || ""}
              onChange={(type) => {
                const findPreset = pagePresets.find(
                  (preset) => preset.name === type
                );

                setPageData({
                  ...pageData,
                  slug: findPreset?.slugPrefix || "/",
                });

                setType(type);
              }}
              options={pagePresets.map((pagePreset) => ({
                value: pagePreset.name,
                label: pagePreset.label,
              }))}
            />
          </div>
        )}

        <div {...className("Field")}>
          <div {...className("label")}>Chemin</div>
          <Input
            value={pageData.slug || ""}
            onChange={(slug) => {
              setPageData({ ...pageData, slug });
            }}
          />
        </div>

        <div {...className("Box")}>
          <div {...className("Field")}>
            <div {...className("label")}>Titre</div>
            <Input
              value={pageData.metadata?.title || ""}
              onChange={(title) => {
                setPageData({
                  ...pageData,
                  metadata: {
                    description: "",
                    ...pageData.metadata,
                    title,
                  },
                });
              }}
            />
          </div>
          <div {...className("Field")}>
            <div {...className("label")}>Description</div>
            <Textarea
              value={pageData.metadata?.description || ""}
              onChange={(description) => {
                setPageData({
                  ...pageData,
                  metadata: {
                    title: "",
                    ...pageData.metadata,
                    description,
                  },
                });
              }}
            />
          </div>
        </div>
      </div>

      <footer>
        <div>
          {!payload.create && (
            <div>
              <button
                {...className("delete")}
                onClick={() => {
                  const { id } = pageData;

                  if (!id) return;

                  deletePage(id).then(() => {
                    handleClose();
                  });
                }}
              >
                <Trash /> Supprimer
              </button>
            </div>
          )}
        </div>

        <div>
          <button
            {...className("save")}
            onClick={async () => {
              const { id, ...data } = pageData;

              const preset = pagePresets.find((preset) => preset.name === type);

              if (payload.create) {
                await createPage({
                  ...data,
                  ...preset?.defaultPageData,
                });
              } else if (id) {
                await updatePage(id, data);
              }

              handleClose();
            }}
          >
            <FloppyDisk />
            {payload.create ? "Créer la page" : "Enregister"}
          </button>
        </div>
      </footer>
    </div>
  );
};

interface ICheckboxLineProps {
  checked: boolean;
  label: string;
  onClick: () => void;
}

const CheckboxLine: FC<ICheckboxLineProps> = ({ checked, onClick, label }) => (
  <div {...className("CheckboxLine")} role="button" onClick={onClick}>
    <Checkbox checked={checked} />
    <span>{label}</span>
  </div>
);
