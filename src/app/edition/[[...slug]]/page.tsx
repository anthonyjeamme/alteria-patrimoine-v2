"use client";

import dynamic from "next/dynamic";

import NotFoundPage from "../../not-found";
import { mongodbConnector } from "@/makasi/connectors/mongodbConnector/mongodbConnector";
import { Page } from "@/makasi";
import Footer from "@/components/Footer/Footer";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import { sections } from "@/project/sections/sections";

import { classNameModule } from "@/utils/className/className";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import { TPageData } from "@/makasi/Page/Page.types";

const PageEdition = dynamic(() => import("@/makasi/Page/Page.edition"), {
  ssr: false,
});

const className = classNameModule(styles);

const CustomRootPage = ({ params }: { params: { slug: string[] } }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pageData, setPageData] = useState<TPageData | null>(null);

  const slugString = params.slug ? `/${params.slug.join("/")}` : "/";

  useEffect(() => {
    fetch(`/api/get-page?path=${encodeURIComponent(slugString)}`)
      .then((response) => response.json())
      .then((data) => {
        setPageData(data);
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
        onChange={({ id, ...data }) => {
          fetch(`/api/set-page`, {
            method: "POST",
            body: JSON.stringify({
              path: data.path,
              data,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
        }}
      />
    </main>
  );
};

export default CustomRootPage;
