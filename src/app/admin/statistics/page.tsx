import { mongodbConnector } from "@/makasi/connectors/mongodbConnector/mongodbConnector";
import AdminStatistics from "@/admin/AdminStatistics/AdminStatistics";

const Page = async () => {
  const pagePaths = await mongodbConnector.getPagePaths();

  return <AdminStatistics pagePaths={pagePaths} />;
};
export default Page;
