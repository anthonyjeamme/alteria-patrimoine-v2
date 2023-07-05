import AdminPages from "@/admin/AdminPages/AdminPages";
import { serverConnector } from "@/connector";

const Page = async () => {
  const pagePaths = await serverConnector.listPages();

  return <AdminPages pagePaths={pagePaths} />;
};

export default Page;
