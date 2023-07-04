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
const className = classNameModule(styles);

export type TPageEditionPayload =
  | {
      create: true;
    }
  | {
      create: false;
      pageData: TPageData;
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
        {sideModal.payload && <EditPage payload={sideModal.payload} />}
      </SideModal>

      {children}
    </pageEditionModalContext.Provider>
  );
};

const EditPage: FC<{ payload: TPageEditionPayload }> = ({ payload }) => {
  const [pageData, setPageData] = useState<TPageData>(
    payload.create
      ? {
          id: "",
          path: "",
          metadata: { title: "", description: "" },
          sections: [],
        }
      : payload.pageData
  );
  const [path, setPath] = useState("");
  const [description, setDescription] = useState("");
  const [sitemap, setSitemap] = useState(false);
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState<"empty" | "legal">("empty");

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
          value={pageData.path}
          onChange={(path) => {
            setPageData({ ...pageData, path });
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
            value={pageData.metadata.title}
            onChange={(title) => {
              setPageData({
                ...pageData,
                metadata: {
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
            value={pageData.metadata.description}
            onChange={(description) => {
              setPageData({
                ...pageData,
                metadata: {
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
          onClick={() => {
            const { id, ...data } = pageData;

            fetch("/api/makasi/createPage", {
              body: JSON.stringify({
                ...data,
                ...templates[type],
              }),
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
            }).then(() => {
              console.log("OK");
            });
          }}
        >
          {payload.create ? "Créer la page" : "Enregister"}
        </button>
      </div>

      {/* <div>
        <button>
          <Trash /> Supprimer
        </button>
      </div> */}
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

const templates = {
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
