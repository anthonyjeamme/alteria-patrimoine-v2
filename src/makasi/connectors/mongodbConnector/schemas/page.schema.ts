import { Schema, model, models } from "mongoose";

const pageSchema = new Schema(
  {
    path: { type: String, required: true },
    visible: { type: Boolean, default: false },

    metadata: {
      title: { type: String, default: "" },
      description: { type: String, default: "" },
    },

    sections: [{ type: Schema.Types.Mixed }],

    navigationBar: { enabled: { type: Boolean, default: false } },
    footer: {
      type: Schema.Types.ObjectId,
      ref: "Component",
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export const PageModel = models["Page"] || model("Page", pageSchema);
