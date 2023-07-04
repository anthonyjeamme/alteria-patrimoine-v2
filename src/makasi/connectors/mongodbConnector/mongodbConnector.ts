import mongoose, { Types } from "mongoose";
import { TComponentData, TConnector } from "../connectors.types";
import { TContentNode } from "../../Content/Content.types";
import { ComponentModel } from "./schemas/component.schema";
import { PageModel } from "./schemas/page.schema";
import {
  clean,
  $limit,
  $match,
  $lookup,
  $unwind,
  $project,
} from "./mongodbConnector.utils";
import { TPageData } from "@/makasi/Page/Page.types";

/**
 *
 */
export const mongodbConnector: TConnector = {
  getPagePaths: async () => {
    await connect();
    const documents = await PageModel.aggregate([
      $project({
        path: 1,
      }),
    ]);

    return documents.map(({ _id, path }) => ({
      id: _id.toString(),
      path,
    }));
  },
  getComponent: async (id: string) => {
    await connect();
    return clean<TComponentData>(await ComponentModel.findById(id));
  },
  createComponent: async (componentData: { nodes: TContentNode[] }) => {
    await connect();
    return clean<TComponentData>(await ComponentModel.create(componentData));
  },
  updateComponent: async (id: string, componentData: TComponentData) => {
    await connect();
    await ComponentModel.updateOne(
      { _id: { $oid: id } },
      { $set: componentData }
    );

    return clean<TComponentData>(await ComponentModel.findById(id));
  },

  getPage: async (path) => {
    await connect();
    return await getPage(path);
  },
  setPage: async (path, pageData) => {
    await connect();
    const page = await PageModel.findOne({ path });

    if (!page) {
      await PageModel.create({
        path,
        ...pageData,
      });
      return await getPage(path);
    }

    await PageModel.updateOne({ path }, pageData);
    return await getPage(path);
  },
};

/**
 *
 */
const connect = async () => {
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect(process.env["MONGODB_URI"] as string);
};

/**
 *
 */
const getPage = async (path: string) => {
  const [data] = await PageModel.aggregate([
    $match({ path }),
    // $lookup({
    //   from: "components",
    //   localField: "footer",
    //   foreignField: "_id",
    //   as: "footer",
    // }),
    $limit(1),
    // $unwind("$footer"),
  ]);

  return clean(data) as TPageData;
};
