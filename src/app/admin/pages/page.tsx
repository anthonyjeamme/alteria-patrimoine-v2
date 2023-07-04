import AdminPages from "@/admin/AdminPages/AdminPages";
import { mongodbConnector } from "@/makasi/connectors/mongodbConnector/mongodbConnector";

const Page = async () => {
  const pagePaths = await mongodbConnector.getPagePaths();

  return <AdminPages pagePaths={pagePaths} />;
};

export default Page;
