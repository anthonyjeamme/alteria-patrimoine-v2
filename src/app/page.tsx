import { Page } from "@/makasi";
import { mongodbConnector } from "@/makasi/connectors/mongodbConnector/mongodbConnector";
import Footer from "@/components/Footer/Footer";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import { TPageData } from "@/makasi/Page/Page.types";
import { Metadata } from "next";
import { sections } from "@/project/sections/sections";

export const metadata: Metadata = {
  title: "Alteria Patrimoine",
  description:
    "Courtier expert de l’épargne et de l’assurance de personnes, nous accompagnons les professions médicales et les gérants d’entreprise",
};

export default async function Home() {
  // await mongodbConnector.setPage("/", data);

  // await mongodbConnector.createComponent({
  //   nodes: footer.content,
  // });

  const page = await mongodbConnector.getPage("/");

  if (!page) return null;

  return (
    <Page
      sectionDefinitions={sections}
      pageData={page}
      FooterComponent={Footer}
      NavigationBarComponent={NavigationBar}
    />
  );
}

const data: TPageData = {
  metadata: {
    title: "Alteria Patrimoine",
    description:
      "Courtier expert de l’épargne et de l’assurance de personnes, nous accompagnons les professions médicales et les gérants d’entreprise",
  },
  sections: [],
};
