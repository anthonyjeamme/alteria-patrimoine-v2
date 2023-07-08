import { TSectionDefinition } from "@/makasi/core/Section/Section.types";
import dynamic from "next/dynamic";

const Component = dynamic(() => import("./TextSection"));

export const TextSectionDefinition: TSectionDefinition = {
  name: "text-section",
  label: `Texte`,
  imagePreview:
    "https://res.cloudinary.com/anthony-jeamme-stuff/image/upload/v1688668287/alteria/text.svg",
  Component,
  defaultData: {
    params: {
      style: {
        color: "var(--dark)",
        backgroundColor: "white",
      },
    },
    fieldsData: {
      text: {
        value: {
          root: {
            type: "root",
            children: [
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: "normal",
                    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum eveniet nostrum suscipit commodi aliquam consectetur accusantium doloribus voluptates ad reprehenderit aliquid odio veniam, dignissimos asperiores quam molestiae aperiam dolorem quod.",
                    type: "text",
                  },
                ],
                type: "paragraph",
              },
            ],
          },
        },
      },
    },
  },
};
