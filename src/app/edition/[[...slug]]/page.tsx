"use client";

import dynamic from "next/dynamic";

import NotFoundPage from "../../not-found";
import { sections } from "@/project/sections/sections";

import { classNameModule } from "@/utils/className/className";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import { TPageData } from "@/makasi/core/Page/Page.types";
import { clientConnector } from "@/makasi/client";

const PageEdition = dynamic(() => import("@/makasi/core/Page/Page.edition"), {
  ssr: false,
});

const className = classNameModule(styles);

const CustomRootPage = ({ params }: { params: { slug: string[] } }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pageData, setPageData] = useState<TPageData | null>(null);

  const slugString = params.slug ? `/${params.slug.join("/")}` : "/";

  useEffect(() => {
    clientConnector
      .getPublicPage(slugString)
      .then(({ page }) => {
        setPageData(page);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [slugString]);

  if (isLoading) return null;
  if (!pageData) return <NotFoundPage />;

  return (
    <main {...className("Page")}>
      <PageEdition
        sectionDefinitions={sections}
        pageData={pageData}
        onChange={async ({ id, ...data }) => {
          setPageData({
            id,
            ...data,
          });
          await clientConnector.updatePage(id, data);
        }}
      />
    </main>
  );
};

export default CustomRootPage;
