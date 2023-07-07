import { TSectionDefinition } from "@/makasi/core/Section/Section.types";
import dynamic from "next/dynamic";

const Component = dynamic(() => import("./HeaderSection"));

export const HeaderSectionDefinition: TSectionDefinition = {
  name: "header",
  label: "Header",
  imagePreview:
    "https://res.cloudinary.com/anthony-jeamme-stuff/image/upload/v1688668287/alteria/header.svg",
  Component,
  defaultData: {
    fieldsData: {
      subtitle: {
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
                    text: "Subtitle",
                    type: "text",
                  },
                ],
                type: "paragraph",
              },
            ],
          },
        },
      },
      title: {
        value: "Title",
      },
    },
    params: {
      color: "white",
      backgroundImage:
        "https://images.unsplash.com/photo-1687272712376-79e3ccdf0755?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
    },
  },
};
