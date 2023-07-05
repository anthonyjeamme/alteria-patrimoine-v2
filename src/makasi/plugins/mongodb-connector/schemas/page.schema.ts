import { Schema, model, models } from "mongoose";

const pageSchema = new Schema(
  {
    public: { type: Boolean },
    slug: { type: String },
    metadata: {
      title: { type: String, default: "" },
      description: { type: String, default: "" },
    },
    sections: [{ type: Schema.Types.Mixed }],
  },
  {
    timestamps: true,
  }
);

export const PageModel = models["pages"] || model("pages", pageSchema);
