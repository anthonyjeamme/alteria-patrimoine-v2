import MongodbConnector from "./makasi/plugins/mongodb-connector";

export const serverConnector = new MongodbConnector(
  process.env["MONGODB_URI"] as string
);
