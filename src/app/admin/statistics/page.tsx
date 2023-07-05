import { serverConnector } from "@/connector";

import AdminStatistics from "@/admin/AdminStatistics/AdminStatistics";

const Page = async () => {
  const pagePaths = await serverConnector.listPages();

  return <AdminStatistics pagePaths={pagePaths} />;
};
export default Page;
