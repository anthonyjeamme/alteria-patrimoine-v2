import { TPageData } from "@/makasi/Page/Page.types";
import mongoose from "mongoose";

/**
 *
 */
export const connect = async () => {
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect(process.env["MONGODB_URI"] as string);
};

/**
 *
 */
export const cleanPagedata = (document: any): TPageData => {
  return {
    id: document._id.toString(),
    public: document.public,
    slug: document.slug,
    metadata: document.metadata,
    sections: document.sections,
  };
};
