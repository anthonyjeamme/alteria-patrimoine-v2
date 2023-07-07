import mongoose, { Types } from "mongoose";

import { connect, cleanPagedata } from "./utils";
import { PageModel } from "./schemas/page.schema";
import { TPageData } from "@/makasi/core/Page/Page.types";
import { DataConnector } from "@/makasi/connectors/connectors.types";

class MongodbConnector implements DataConnector {
  mongo_uri: string;

  constructor(mongo_uri: string) {
    this.mongo_uri = mongo_uri;
  }

  /**
   *
   */
  async getPublicPage(slug: string): Promise<TPageData | null> {
    try {
      await this.connect();

      const data = await PageModel.findOne({ slug });
      if (!data) return null;

      return cleanPagedata(data.toJSON());
    } catch {
      return null;
    }
  }

  /**
   *
   */
  async getPage(id: string) {
    try {
      await connect();
      const data = await PageModel.findById(id);
      if (!data) return null;

      return cleanPagedata(data.toJSON());
    } catch {
      return null;
    }
  }

  /**
   *
   */
  async listPages() {
    await connect();

    const pages = await PageModel.aggregate([
      {
        $project: {
          slug: 1,
          public: 1,
          metadata: 1,
        },
      },
    ]);

    return pages.map(cleanPagedata);
  }

  /**
   *
   */
  async createPage(pageData: Partial<TPageData>) {
    await connect();

    const page = await PageModel.create(pageData);

    if (!page) return null;

    return cleanPagedata(page.toJSON());
  }

  /**
   *
   */
  async updatePage(id: string, pageData: Partial<TPageData>) {
    await connect();

    await PageModel.findOneAndUpdate(
      {
        _id: new Types.ObjectId(id),
      },
      {
        $set: pageData,
      }
    );

    const data = await PageModel.findById(id);
    if (!data) return null;

    return cleanPagedata(data.toJSON());
  }

  /**
   *
   */
  async deletePage(id: string) {
    await connect();
    const result = await PageModel.deleteOne({ _id: new Types.ObjectId(id) });
    return result.deletedCount;
  }

  /**
   *
   */
  private async connect() {
    if (mongoose.connection.readyState === 1) return;
    await mongoose.connect(this.mongo_uri);
  }
}

export default MongodbConnector;
