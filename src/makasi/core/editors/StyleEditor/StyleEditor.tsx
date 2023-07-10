"use client";

import { classNameModule } from "@/utils/className/className";
import styles from "./StyleEditor.module.scss";
import { FC } from "react";
import { TStyle } from "./StyleEditor.types";
import { FourDimensionField } from "./FourDimensionField/FourDimensionField";
import ColorField from "./ColorField/ColorField";
import { TwoDimensionField } from "./TwoDimensionField/TwoDimensionField";
import ColumnField from "./ColumnField/ColumnField";
import ContainerField from "./ContainerField/ContainerField";
import { OneDimensionField } from "./OneDimensionField/OneDimensionField";
import AlignItems from "./AlignItems/AlignItems";
const className = classNameModule(styles);

interface IStyleEditorProps {
  data?: TStyle;
  onChange: (data: TStyle) => void;
  fields: TStyleField[];
}

type TStyleField =
  | "margin"
  | "padding"
  | "border-radius"
  | "background"
  | "color"
  | "gap"
  | "columns"
  | "container-size"
  | "width"
  | "height"
  | "align-items";

const StyleEditor: FC<IStyleEditorProps> = ({
  data = {},
  onChange,
  fields = [],
}) => {
  return (
    <div {...className("StyleEditor")}>
      {fields.includes("align-items") && (
        <AlignItems
          value={data.alignItems}
          onChange={(alignItems) => {
            onChange({ ...data, alignItems });
          }}
        />
      )}
      {fields.includes("width") && (
        <OneDimensionField
          label="Largeur"
          value={data.width}
          onChange={(width) => {
            onChange({ ...data, width });
          }}
        />
      )}

      {fields.includes("height") && (
        <OneDimensionField
          label="Hauteur"
          value={data.height}
          onChange={(height) => {
            onChange({ ...data, height });
          }}
        />
      )}

      {fields.includes("container-size") && (
        <ContainerField
          label="Taille du conteneur"
          value={data.containerSize || "medium"}
          onChange={(containerSize: any) => {
            onChange({ ...data, containerSize });
          }}
        />
      )}

      {fields.includes("padding") && (
        <FourDimensionField
          label="Marge interne"
          value={data.padding}
          onChange={(padding) => {
            onChange({ ...data, padding });
          }}
        />
      )}
      {fields.includes("margin") && (
        <FourDimensionField
          label="Marge externe"
          value={data.margin}
          onChange={(margin) => {
            onChange({ ...data, margin });
          }}
        />
      )}
      {fields.includes("border-radius") && (
        <FourDimensionField
          label="Arrondi des bordures"
          value={data.borderRadius}
          onChange={(borderRadius) => {
            onChange({ ...data, borderRadius });
          }}
        />
      )}
      {fields.includes("gap") && (
        <TwoDimensionField
          label="Espace entre elements"
          value={data.gap}
          onChange={(gap) => {
            onChange({ ...data, gap });
          }}
        />
      )}

      {fields.includes("color") && (
        <ColorField
          label="Couleur du texte"
          value={data.color || ""}
          onChange={(color) => {
            onChange({ ...data, color });
          }}
        />
      )}
      {fields.includes("background") && (
        <ColorField
          label="Couleur du fond"
          value={data.backgroundColor || ""}
          onChange={(backgroundColor) => {
            onChange({ ...data, backgroundColor });
          }}
        />
      )}

      {fields.includes("columns") && (
        <>
          <ColumnField
            label="Colonnes"
            value={data.columns?.desktop}
            onChange={(desktop) => {
              onChange({
                ...data,
                columns: {
                  ...data.columns,
                  desktop,
                },
              });
            }}
          />
          <ColumnField
            label="Colonnes tablette"
            value={data.columns?.tablet}
            onChange={(tablet) => {
              onChange({
                ...data,
                columns: {
                  ...data.columns,
                  tablet,
                },
              });
            }}
          />
          <ColumnField
            label="Colonnes mobile"
            value={data.columns?.mobile}
            onChange={(mobile) => {
              onChange({
                ...data,
                columns: {
                  ...data.columns,
                  mobile,
                },
              });
            }}
          />
        </>
      )}
    </div>
  );
};

export default StyleEditor;
