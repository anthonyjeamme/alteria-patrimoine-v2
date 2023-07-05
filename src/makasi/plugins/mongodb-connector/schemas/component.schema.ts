import { TContentNode } from "@/makasi/Content/Content.types";
import { Schema, Model, model, models } from "mongoose";

const componentSchema = new Schema(
  {
    nodes: [{ type: Schema.Types.Mixed }],
  },
  {
    timestamps: true,
  }
);

export const ComponentModel =
  (models["Component"] as Model<TDBComponentData>) ||
  model<TDBComponentData>("Component", componentSchema);

type TDBComponentData = {
  nodes: TContentNode[];
};
