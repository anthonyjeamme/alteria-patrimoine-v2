import NotFoundPage from "../not-found";
import { mongodbConnector } from "@/makasi/connectors/mongodbConnector/mongodbConnector";
import { Page } from "@/makasi";
import Footer from "@/components/Footer/Footer";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import { sections } from "@/project/sections/sections";

import { classNameModule } from "@/utils/className/className";
import styles from "./page.module.scss";
const className = classNameModule(styles);

const CustomRootPage = async ({ params }: { params: { slug: string[] } }) => {
  const slugString = "/" + params.slug.join("/");

  const page = await mongodbConnector.getPage(slugString);

  if (!page) {
    return <NotFoundPage />;
  }
  return (
    <main {...className("Page")}>
      <Page
        sectionDefinitions={sections}
        pageData={page}
        FooterComponent={Footer}
        NavigationBarComponent={NavigationBar}
      />
    </main>
  );
};

// export async function generateStaticParams() {
//   const pages = await mongodbConnector.getPagePaths();

//   return pages.map((page) => ({
//     slug: page.path.split("/").map((particle) => !!particle),
//   }));
// }

export default CustomRootPage;
