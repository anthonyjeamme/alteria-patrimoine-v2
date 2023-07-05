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
import { Trash } from "@phosphor-icons/react";
import Checkbox from "@/admin/common/Checkbox/Checkbox";
import { TPageData } from "@/makasi/Page/Page.types";
import { useAdminPagesContext } from "../AdminPagesContext/AdminPagesContext";
const className = classNameModule(styles);

export type TPageEditionPayload =
  | {
      create: true;
    }
  | {
      create: false;
      pageData: Partial<TPageData>;
    };

const pageEditionModalContext =
  // @ts-ignore
  createContext<TSideModalHook<TPageEditionPayload>>();

export const usePageEditionModal = () => useContext(pageEditionModalContext);

export const PageEditionModalContext: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const sideModal = useSideModal<TPageEditionPayload>();

  return (
    <pageEditionModalContext.Provider value={sideModal}>
      <SideModal {...sideModal}>
        {sideModal.payload && (
          <EditPage
            payload={sideModal.payload}
            handleClose={() => {
              sideModal.close();
            }}
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
}> = ({ payload, handleClose }) => {
  const [pageData, setPageData] = useState<Partial<TPageData>>(
    payload.create
      ? {
          id: "",
          slug: "",
          metadata: { title: "", description: "" },
          sections: [],
          public: false,
        }
      : payload.pageData
  );
  const [type, setType] = useState<string>("empty");
  const { deletePage, createPage, updatePage } = useAdminPagesContext();

  return (
    <div {...className("EditPage")}>
      {/* <CheckboxLine
        checked={sitemap}
        label="Ajouter au sitemap"
        onClick={() => {
          setSitemap(!sitemap);
        }}
      />

      <CheckboxLine
        checked={visible}
        label="Visible"
        onClick={() => {
          setVisible(!visible);
        }}
      /> */}

      <div {...className("Field")}>
        <div {...className("label")}>Chemin</div>
        <Input
          value={pageData.slug || ""}
          onChange={(slug) => {
            setPageData({ ...pageData, slug });
          }}
        />
      </div>

      <div {...className("Field")}>
        <div {...className("label")}>Type de page</div>
        <Select
          value={type}
          onChange={setType}
          options={[
            {
              value: "empty",
              label: "Vide",
            },
            {
              value: "legal",
              label: "Page légale",
            },
          ]}
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

      <div>
        <button
          onClick={async () => {
            const { id, ...data } = pageData;

            if (payload.create) {
              await createPage({
                ...data,
                ...templates[type],
              });
            } else if (id) {
              await updatePage(id, data);
            }

            handleClose();
          }}
        >
          {payload.create ? "Créer la page" : "Enregister"}
        </button>
      </div>

      {!payload.create && (
        <div
          onClick={() => {
            const { id } = pageData;

            if (!id) return;

            deletePage(id).then(() => {
              handleClose();
            });
          }}
        >
          <button>
            <Trash /> Supprimer
          </button>
        </div>
      )}
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

const templates: Record<string, Partial<TPageData>> = {
  empty: {
    sections: [],
  },
  legal: {
    sections: [
      {
        id: "a",
        type: "legal-header",
        fieldsData: {
          title: {
            value: "Titre",
            params: {},
          },
        },
        params: {},
      },

      {
        type: "text-section",
        id: "x",
        params: {},
        fieldsData: {
          text: {
            value: {
              root: {
                type: "root",
                children: [
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "text",
                        text: "Contenu",
                        style: "",
                        mode: "normal",
                        format: 0,
                        detail: 0,
                      },
                    ],
                  },
                ],
              },
            },
            params: {},
          },
        },
      },
    ],
  },
};
