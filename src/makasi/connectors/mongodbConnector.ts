import mongoose from "mongoose";
import { TConnector } from "./connectors.types";

const pageSchema = new mongoose.Schema(
  {
    path: String,
    sections: { type: mongoose.Schema.Types.Mixed, default: [] },
  },
  {
    timestamps: true,
  }
);

const Page = mongoose.models["Page"] || mongoose.model("Page", pageSchema);

export const mongodbConnector: TConnector = {
  getPage: async (path) => {
    await connect();

    const data = await Page.findOne({ path });

    if (data) return data.toJSON();

    return null;
  },
  setPage: async (path, pageData) => {
    await connect();
    const page = await Page.findOne({ path });

    if (!page) {
      await Page.create(pageData);

      return;
    }

    await Page.updateOne({ path }, { $set: pageData });
  },
};

const connect = async () => {
  if (mongoose.connection.readyState === 1) return;

  await mongoose.connect(process.env["MONGODB_URI"] as string);
};
